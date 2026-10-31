import Link from 'next/link'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import { getLeadAttribution } from '@/services/leads/get-lead-attribution'
import * as S from './home-search-brief.styles'

function isPlausiblePhoneNumber(value: string) {
  const digits = value.replace(/\D/g, '')
  return digits.length >= 8 && digits.length <= 15 && !/^(\d)\1+$/.test(digits)
}

export function HomeSearchBrief() {
  const [contactChannel, setContactChannel] = useState<'email' | 'phone'>('email')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [phoneError, setPhoneError] = useState('')

  async function submitBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const phone = String(form.get('phone') || '')

    if (contactChannel === 'phone' && !isPlausiblePhoneNumber(phone)) {
      setPhoneError('Enter a valid phone number with an area or country code.')
      return
    }

    setPhoneError('')
    setStatus('sending')

    try {
      const result = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
          subject: 'New personal home search brief',
          from_name: 'Becca Travis Website',
          form_source: 'Homes personal search brief',
          form_version: 'home_search_brief_v1',
          first_name: form.get('first_name'),
          email: form.get('email'),
          phone,
          reply_channel: contactChannel === 'email' ? 'Email' : 'Phone or text',
          target_area: form.get('target_area'),
          move_timing: form.get('move_timing'),
          must_haves: form.get('must_haves'),
          botcheck: form.get('botcheck'),
          ...getLeadAttribution(),
        }),
      })
      const response = await result.json()
      setStatus(result.ok && response.success === true ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <S.Success role="status">
        <CheckCircledIcon aria-hidden="true" />
        <div>
          <h2>Your search brief was sent.</h2>
          <p>
            Becca will review your area, timing and priorities before replying through the
            channel you selected.
          </p>
          <Link href="/areas">Keep comparing North Alabama areas</Link>
        </div>
      </S.Success>
    )
  }

  return (
    <S.Shell>
      <S.ValuePanel>
        <S.Eyebrow>Personal search brief</S.Eyebrow>
        <h2>Start with the decision, not a list of listings.</h2>
        <p>
          Share a few details so Becca can understand what a useful home search looks like
          for you.
        </p>
        <ul>
          <li>Focus the search around your location and timing</li>
          <li>Turn must haves into useful property criteria</li>
          <li>Identify the next questions to answer before touring</li>
        </ul>
        <Link href="/agenciamento#planejador">Prefere atendimento em português?</Link>
      </S.ValuePanel>

      <S.Form onSubmit={submitBrief} noValidate>
        <h2>Tell Becca what you need</h2>
        <p>Only your first name and one reply method are required.</p>

        <S.ContactChoice role="radiogroup" aria-label="Preferred reply method">
          <button
            type="button"
            role="radio"
            aria-checked={contactChannel === 'email'}
            data-selected={contactChannel === 'email'}
            onClick={() => setContactChannel('email')}
          >
            Email me
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={contactChannel === 'phone'}
            data-selected={contactChannel === 'phone'}
            onClick={() => setContactChannel('phone')}
          >
            Call or text me
          </button>
        </S.ContactChoice>

        <S.Fields>
          <label>
            <span>First name</span>
            <input name="first_name" type="text" autoComplete="given-name" required />
          </label>
          {contactChannel === 'email' ? (
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
          ) : (
            <label>
              <span>Phone</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                aria-invalid={Boolean(phoneError)}
                aria-describedby={phoneError ? 'homes-phone-error' : undefined}
                onChange={() => phoneError && setPhoneError('')}
                placeholder="Include area or country code"
              />
              {phoneError && (
                <S.Error id="homes-phone-error" role="alert">
                  {phoneError}
                </S.Error>
              )}
            </label>
          )}
          <label>
            <span>Target area, if known</span>
            <input name="target_area" type="text" placeholder="City, community or area" />
          </label>
          <label>
            <span>When are you hoping to move?</span>
            <select name="move_timing" defaultValue="">
              <option value="">Still researching</option>
              <option>Within 3 months</option>
              <option>3 to 6 months</option>
              <option>6 to 12 months</option>
              <option>More than a year</option>
            </select>
          </label>
          <S.WideLabel>
            <span>What matters most in your next home?</span>
            <textarea
              name="must_haves"
              rows={3}
              placeholder="A few priorities are enough. You can add details later."
            />
          </S.WideLabel>
        </S.Fields>

        <input
          name="botcheck"
          type="checkbox"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ display: 'none' }}
        />
        <S.Consent>
          By sending this brief, you authorize contact about your request and agree to the{' '}
          <Link href="/terms-of-service">Terms of Use</Link> and{' '}
          <Link href="/privacy-notice">Privacy Policy</Link>.
        </S.Consent>
        <S.Submit type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending your brief' : 'Send my home search brief'}
        </S.Submit>
        {status === 'error' && (
          <S.Error role="alert">
            Your brief could not be sent. Please try again or call{' '}
            <a href="tel:+12563189066">256 318 9066</a>.
          </S.Error>
        )}
      </S.Form>
    </S.Shell>
  )
}
