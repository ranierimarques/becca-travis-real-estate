import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useMemo, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import {
  ArrowLeftIcon,
  BarChartIcon,
  CheckCircledIcon,
  ChevronRightIcon,
  Cross2Icon,
  EnvelopeClosedIcon,
  GlobeIcon,
  HomeIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  MobileIcon,
} from '@radix-ui/react-icons'
import { getLeadAttribution } from '@/services/leads/get-lead-attribution'
import {
  buildBuyerPlan,
  buyerCopy,
  buyerGoals,
  getBuyerRouteContext,
  getGoalLabel,
  getTimingLabel,
  moveTimings,
} from './buyer-concierge-content'
import type {
  BuyerAnswers,
  BuyerGoal,
  BuyerLanguage,
  MoveTiming,
} from './buyer-concierge-content'
import * as S from './buyer-concierge.styles'

type Step = 'goal' | 'location' | 'timing' | 'plan' | 'contact' | 'success'
type ReplyChannel = 'email' | 'phone'
type SubmitStatus = 'idle' | 'sending' | 'error'
type FieldErrors = Partial<Record<'name' | 'email' | 'phone' | 'location', string>>

function firstIncompleteStep(answers: BuyerAnswers): Step {
  if (!answers.goal) return 'goal'
  if (!answers.location) return 'location'
  if (!answers.timing) return 'timing'
  return 'plan'
}

function storageKey(language: BuyerLanguage) {
  return `buyer-concierge-${language}`
}

function readStoredAnswers(language: BuyerLanguage): BuyerAnswers {
  if (typeof window === 'undefined') return {}

  try {
    const parsed = JSON.parse(sessionStorage.getItem(storageKey(language)) || '{}') as {
      goal?: unknown
      location?: unknown
      timing?: unknown
    }
    const goal = buyerGoals.find(value => value === parsed.goal)
    const timing = moveTimings.find(value => value === parsed.timing)
    const location =
      typeof parsed.location === 'string'
        ? parsed.location.trim().slice(0, 100)
        : undefined

    return { goal, location: location || undefined, timing }
  } catch {
    return {}
  }
}

function writeStoredAnswers(language: BuyerLanguage, answers: BuyerAnswers) {
  if (typeof window === 'undefined') return
  try {
    sessionStorage.setItem(storageKey(language), JSON.stringify(answers))
  } catch {
    // The flow remains usable when storage is unavailable.
  }
}

function isValidName(value: string) {
  return value.length <= 50 && /^[\p{L}\p{M}][\p{L}\p{M}\s'’-]*$/u.test(value.trim())
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value.trim())
}

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, '')
  return digits.length >= 8 && digits.length <= 15 && !/^(\d)\1+$/.test(digits)
}

function GoalIcon({ goal }: { goal: BuyerGoal }) {
  if (goal === 'search') return <MagnifyingGlassIcon aria-hidden="true" />
  if (goal === 'compare') return <HomeIcon aria-hidden="true" />
  if (goal === 'numbers') return <BarChartIcon aria-hidden="true" />
  return <GlobeIcon aria-hidden="true" />
}

// The state branches below intentionally stay together so the dialog reads as one flow.
// eslint-disable-next-line sonarjs/cognitive-complexity
export function BuyerConcierge() {
  const router = useRouter()
  const context = useMemo(
    () => getBuyerRouteContext(router.pathname, router.asPath),
    [router.asPath, router.pathname]
  )
  const copy = buyerCopy[context.language]
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<Step>('goal')
  const [answers, setAnswers] = useState<BuyerAnswers>({})
  const [locationDraft, setLocationDraft] = useState('')
  const [replyChannel, setReplyChannel] = useState<ReplyChannel>('email')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')

  useEffect(() => {
    const stored = readStoredAnswers(context.language)
    const next: BuyerAnswers = {
      ...stored,
      ...(context.goal ? { goal: context.goal } : {}),
      ...(context.location ? { location: context.location } : {}),
    }

    setAnswers(next)
    setLocationDraft(next.location || '')
    setStep(firstIncompleteStep(next))
    setFieldErrors({})
    setSubmitStatus('idle')
    setOpen(false)
  }, [context])

  const plan = useMemo(
    () => buildBuyerPlan(context.language, answers),
    [answers, context.language]
  )
  const excluded =
    router.pathname === '/contact-us' || router.pathname === '/agenciamento'
  const questionStep = step === 'goal' ? 1 : step === 'location' ? 2 : 3
  const hasBack = step !== 'goal' && step !== 'success'
  const topbarLabel =
    step === 'goal' || step === 'location' || step === 'timing'
      ? copy.progress(questionStep)
      : copy.planLabel

  function updateAnswers(patch: Partial<BuyerAnswers>) {
    setAnswers(current => {
      const next = { ...current, ...patch }
      writeStoredAnswers(context.language, next)
      return next
    })
  }

  function handleOpenChange(nextOpen: boolean) {
    if (nextOpen) {
      setStep(firstIncompleteStep(answers))
      setSubmitStatus('idle')
      setFieldErrors({})
    }
    setOpen(nextOpen)
  }

  function goBack() {
    if (step === 'contact') setStep('plan')
    if (step === 'plan') setStep('timing')
    if (step === 'timing') setStep('location')
    if (step === 'location') setStep('goal')
  }

  function chooseGoal(goal: BuyerGoal) {
    updateAnswers({ goal })
    setStep(answers.location ? 'timing' : 'location')
  }

  function continueLocation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const location = locationDraft.trim()
    if (!location) {
      setFieldErrors({ location: copy.locationError })
      return
    }
    setFieldErrors({})
    updateAnswers({ location })
    setStep('timing')
  }

  function chooseUnknownLocation() {
    setLocationDraft(copy.notSure)
    setFieldErrors({})
    updateAnswers({ location: copy.notSure })
    setStep('timing')
  }

  function chooseTiming(timing: MoveTiming) {
    updateAnswers({ timing })
    setStep('plan')
  }

  async function submitPlan(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors: FieldErrors = {}
    const cleanName = firstName.trim()
    const cleanEmail = email.trim()
    const cleanPhone = phone.trim()

    if (!isValidName(cleanName)) nextErrors.name = copy.nameError
    if (replyChannel === 'email' && !isValidEmail(cleanEmail)) {
      nextErrors.email = copy.emailError
    }
    if (replyChannel === 'phone' && !isValidPhone(cleanPhone)) {
      nextErrors.phone = copy.phoneError
    }

    if (Object.keys(nextErrors).length) {
      setFieldErrors(nextErrors)
      return
    }

    setFieldErrors({})
    setSubmitStatus('sending')

    const form = new FormData(event.currentTarget)
    const goalLabel = getGoalLabel(context.language, answers.goal)
    const timingLabel = getTimingLabel(context.language, answers.timing)
    const summary = [goalLabel, answers.location, timingLabel].filter(Boolean).join(' | ')

    try {
      const result = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
          subject:
            context.language === 'pt'
              ? 'Novo plano de compra do site'
              : 'New website buyer plan',
          from_name: 'Becca Travis Website',
          form_source: 'Sitewide buyer concierge',
          form_version: 'buyer_concierge_v1',
          language: context.language === 'pt' ? 'Portuguese' : 'English',
          buyer_goal: goalLabel,
          target_location: answers.location,
          move_timing: timingLabel,
          current_route: router.asPath,
          source_page_title: document.title,
          page_context: context.label,
          plan_summary: summary,
          plan_steps: plan.map(item => `${item.title}: ${item.text}`).join('\n'),
          reply_channel: replyChannel === 'email' ? 'Email' : 'Phone or text',
          first_name: cleanName,
          email: replyChannel === 'email' ? cleanEmail : undefined,
          phone: replyChannel === 'phone' ? cleanPhone : undefined,
          botcheck: form.get('botcheck'),
          ...getLeadAttribution(),
        }),
      })
      const response = (await result.json()) as { success?: boolean }

      if (!result.ok || response.success !== true) {
        setSubmitStatus('error')
        return
      }

      sessionStorage.removeItem(storageKey(context.language))
      setSubmitStatus('idle')
      setStep('success')
    } catch {
      setSubmitStatus('error')
    }
  }

  if (excluded) return null

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        <S.Launcher aria-label={copy.launcher}>
          <HomeIcon aria-hidden="true" />
          <S.LauncherFull>{copy.launcher}</S.LauncherFull>
          <S.LauncherShort>{copy.launcherShort}</S.LauncherShort>
        </S.Launcher>
      </Dialog.Trigger>

      <Dialog.Portal>
        <S.Overlay />
        <S.Content>
          <S.Shell>
            <S.Topbar>
              {hasBack ? (
                <S.IconButton type="button" onClick={goBack} aria-label={copy.back}>
                  <ArrowLeftIcon aria-hidden="true" />
                </S.IconButton>
              ) : (
                <S.EmptyTopbarSlot />
              )}
              <S.TopbarLabel>{topbarLabel}</S.TopbarLabel>
              <Dialog.Close asChild>
                <S.IconButton type="button" aria-label={copy.close}>
                  <Cross2Icon aria-hidden="true" />
                </S.IconButton>
              </Dialog.Close>
            </S.Topbar>

            <S.Progress aria-hidden="true">
              {[1, 2, 3].map(segment => (
                <S.ProgressSegment key={segment} complete={segment <= questionStep} />
              ))}
            </S.Progress>

            {step === 'goal' && (
              <S.Body>
                <S.Eyebrow>{copy.planLabel}</S.Eyebrow>
                <S.Title>{copy.goalTitle}</S.Title>
                <S.Description>{copy.goalDescription}</S.Description>
                <S.ChoiceList>
                  {buyerGoals.map(goal => (
                    <S.Choice
                      key={goal}
                      type="button"
                      data-selected={answers.goal === goal}
                      onClick={() => chooseGoal(goal)}
                    >
                      <S.ChoiceIcon>
                        <GoalIcon goal={goal} />
                      </S.ChoiceIcon>
                      <S.ChoiceLabel>{copy.goals[goal]}</S.ChoiceLabel>
                      <S.Chevron>
                        <ChevronRightIcon aria-hidden="true" />
                      </S.Chevron>
                    </S.Choice>
                  ))}
                </S.ChoiceList>
                <S.Microcopy>
                  <LockClosedIcon aria-hidden="true" /> {copy.noContact}
                </S.Microcopy>
              </S.Body>
            )}

            {step === 'location' && (
              <S.Body>
                <S.Eyebrow>{copy.planLabel}</S.Eyebrow>
                <S.Title>{copy.locationTitle}</S.Title>
                <S.Description>{copy.locationDescription}</S.Description>
                <S.ContactForm onSubmit={continueLocation} noValidate>
                  <S.Field>
                    <span>{copy.locationLabel}</span>
                    <S.Input
                      type="text"
                      value={locationDraft}
                      onChange={event => {
                        setLocationDraft(event.target.value)
                        if (fieldErrors.location) setFieldErrors({})
                      }}
                      placeholder={copy.locationPlaceholder}
                      autoComplete="address-level2"
                      maxLength={100}
                      autoFocus
                      aria-invalid={Boolean(fieldErrors.location)}
                      aria-describedby={
                        fieldErrors.location ? 'buyer-location-error' : undefined
                      }
                    />
                  </S.Field>
                  {fieldErrors.location && (
                    <S.Error id="buyer-location-error" role="alert">
                      {fieldErrors.location}
                    </S.Error>
                  )}
                  <S.PrimaryButton type="submit">{copy.locationContinue}</S.PrimaryButton>
                  <S.SecondaryButton type="button" onClick={chooseUnknownLocation}>
                    {copy.notSure}
                  </S.SecondaryButton>
                </S.ContactForm>
              </S.Body>
            )}

            {step === 'timing' && (
              <S.Body>
                <S.Eyebrow>{copy.planLabel}</S.Eyebrow>
                <S.Title>{copy.timingTitle}</S.Title>
                <S.Description>{copy.timingDescription}</S.Description>
                <S.ChoiceList>
                  {moveTimings.map(timing => (
                    <S.Choice
                      key={timing}
                      type="button"
                      data-selected={answers.timing === timing}
                      onClick={() => chooseTiming(timing)}
                    >
                      <S.ChoiceIcon>
                        <CheckCircledIcon aria-hidden="true" />
                      </S.ChoiceIcon>
                      <S.ChoiceLabel>{copy.timings[timing]}</S.ChoiceLabel>
                      <S.Chevron>
                        <ChevronRightIcon aria-hidden="true" />
                      </S.Chevron>
                    </S.Choice>
                  ))}
                </S.ChoiceList>
              </S.Body>
            )}

            {step === 'plan' && (
              <S.Body>
                <S.Eyebrow>{copy.planLabel}</S.Eyebrow>
                <S.Title>{copy.planTitle}</S.Title>
                <S.SummaryLine>
                  {[
                    getGoalLabel(context.language, answers.goal),
                    answers.location,
                    getTimingLabel(context.language, answers.timing),
                  ]
                    .filter(Boolean)
                    .join(' • ')}
                </S.SummaryLine>
                <S.PlanList>
                  {plan.map((item, index) => (
                    <S.PlanItem key={item.title}>
                      <span>{index + 1}</span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </S.PlanItem>
                  ))}
                </S.PlanList>
                <S.PrimaryButton type="button" onClick={() => setStep('contact')}>
                  {copy.askForHelp}
                </S.PrimaryButton>
                <S.SecondaryButton type="button" onClick={() => setOpen(false)}>
                  {copy.keepExploring}
                </S.SecondaryButton>
                <S.Microcopy>
                  <LockClosedIcon aria-hidden="true" /> {copy.contactPreview}
                </S.Microcopy>
              </S.Body>
            )}

            {step === 'contact' && (
              <S.Body>
                <S.Eyebrow>{copy.planLabel}</S.Eyebrow>
                <S.Title>{copy.contactTitle}</S.Title>
                <S.Description>{copy.contactDescription}</S.Description>
                <S.ContactForm onSubmit={submitPlan} noValidate>
                  <S.ContactChoice role="radiogroup" aria-label={copy.contactTitle}>
                    <button
                      type="button"
                      role="radio"
                      aria-checked={replyChannel === 'email'}
                      data-selected={replyChannel === 'email'}
                      onClick={() => {
                        setReplyChannel('email')
                        setFieldErrors({})
                      }}
                    >
                      <EnvelopeClosedIcon aria-hidden="true" /> {copy.emailMe}
                    </button>
                    <button
                      type="button"
                      role="radio"
                      aria-checked={replyChannel === 'phone'}
                      data-selected={replyChannel === 'phone'}
                      onClick={() => {
                        setReplyChannel('phone')
                        setFieldErrors({})
                      }}
                    >
                      <MobileIcon aria-hidden="true" /> {copy.phoneMe}
                    </button>
                  </S.ContactChoice>

                  <S.Field>
                    <span>{copy.firstName}</span>
                    <S.Input
                      type="text"
                      value={firstName}
                      onChange={event => {
                        setFirstName(event.target.value)
                        if (fieldErrors.name)
                          setFieldErrors({ ...fieldErrors, name: undefined })
                      }}
                      autoComplete="given-name"
                      maxLength={50}
                      aria-invalid={Boolean(fieldErrors.name)}
                      aria-describedby={fieldErrors.name ? 'buyer-name-error' : undefined}
                    />
                  </S.Field>
                  {fieldErrors.name && (
                    <S.Error id="buyer-name-error" role="alert">
                      {fieldErrors.name}
                    </S.Error>
                  )}

                  {replyChannel === 'email' ? (
                    <>
                      <S.Field>
                        <span>{copy.email}</span>
                        <S.Input
                          type="email"
                          value={email}
                          onChange={event => {
                            setEmail(event.target.value)
                            if (fieldErrors.email) {
                              setFieldErrors({ ...fieldErrors, email: undefined })
                            }
                          }}
                          autoComplete="email"
                          aria-invalid={Boolean(fieldErrors.email)}
                          aria-describedby={
                            fieldErrors.email ? 'buyer-email-error' : undefined
                          }
                        />
                      </S.Field>
                      {fieldErrors.email && (
                        <S.Error id="buyer-email-error" role="alert">
                          {fieldErrors.email}
                        </S.Error>
                      )}
                    </>
                  ) : (
                    <>
                      <S.Field>
                        <span>{copy.phone}</span>
                        <S.Input
                          type="tel"
                          value={phone}
                          onChange={event => {
                            setPhone(event.target.value)
                            if (fieldErrors.phone) {
                              setFieldErrors({ ...fieldErrors, phone: undefined })
                            }
                          }}
                          autoComplete="tel"
                          placeholder={copy.phonePlaceholder}
                          aria-invalid={Boolean(fieldErrors.phone)}
                          aria-describedby={
                            fieldErrors.phone ? 'buyer-phone-error' : undefined
                          }
                        />
                      </S.Field>
                      {fieldErrors.phone && (
                        <S.Error id="buyer-phone-error" role="alert">
                          {fieldErrors.phone}
                        </S.Error>
                      )}
                    </>
                  )}

                  <S.Honeypot
                    name="botcheck"
                    type="checkbox"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                  <S.Consent>
                    {copy.consent} <Link href="/terms-of-service">{copy.terms}</Link> ·{' '}
                    <Link href="/privacy-notice">{copy.privacy}</Link>
                  </S.Consent>
                  <S.PrimaryButton type="submit" disabled={submitStatus === 'sending'}>
                    {submitStatus === 'sending' ? copy.sending : copy.sendPlan}
                  </S.PrimaryButton>
                  {submitStatus === 'error' && (
                    <S.Error role="alert">
                      {copy.submitError} <a href="tel:+12563189066">256 318 9066</a>
                    </S.Error>
                  )}
                  <S.TextButton type="button" onClick={() => setStep('plan')}>
                    {copy.backToPlan}
                  </S.TextButton>
                </S.ContactForm>
              </S.Body>
            )}

            {step === 'success' && (
              <S.Body>
                <S.Success role="status">
                  <CheckCircledIcon aria-hidden="true" />
                  <S.Title>{copy.successTitle}</S.Title>
                  <S.Description>{copy.successDescription}</S.Description>
                  <S.PrimaryButton type="button" onClick={() => setOpen(false)}>
                    {copy.done}
                  </S.PrimaryButton>
                </S.Success>
              </S.Body>
            )}
          </S.Shell>
        </S.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
