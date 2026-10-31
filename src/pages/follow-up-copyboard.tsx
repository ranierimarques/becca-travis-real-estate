import Head from 'next/head'
import { useState } from 'react'

type Language = 'en' | 'pt' | 'es'

const messages: { title: string; en: string; pt: string; es: string }[] = [
  {
    title: '1. Start the conversation',
    en: 'Hi! This is Becca Travis. Thanks for reaching out about {area}. What are you looking for in your next home?',
    pt: 'Olá! Aqui é a Becca Travis. Obrigada por entrar em contato sobre {area}. O que você procura no seu próximo imóvel?',
    es: '¡Hola! Soy Becca Travis. Gracias por comunicarte sobre {area}. ¿Qué buscas en tu próxima vivienda?',
  },
  {
    title: '2. Learn about the search',
    en: 'I would love to narrow down the options for you. Is this home for you to live in, or are you looking for an investment?',
    pt: 'Quero ajudar você a encontrar as melhores opções. O imóvel será para morar ou para investimento?',
    es: 'Me encantaría ayudarte a encontrar opciones. ¿La vivienda será para vivir o para invertir?',
  },
  {
    title: '3. Discuss the budget',
    en: 'As you compare homes around {area}, what price range or monthly payment feels comfortable for you?',
    pt: 'Ao comparar imóveis em {area}, qual faixa de preço ou valor de parcela mensal faz sentido para você?',
    es: 'Al comparar viviendas en {area}, ¿qué rango de precio o pago mensual te resulta cómodo?',
  },
  {
    title: '4. Compare the details',
    en: 'When you have an address in mind, I can help you find the right resources to check its taxes, utilities, schools, and flood maps. Is there a property you would like to discuss?',
    pt: 'Quando você tiver um endereço em mente, posso ajudar a encontrar os recursos para verificar impostos, serviços, escolas e mapas de inundação. Há algum imóvel sobre o qual você gostaria de conversar?',
    es: 'Cuando tengas una dirección en mente, puedo ayudarte a encontrar recursos para revisar impuestos, servicios, escuelas y mapas de inundación. ¿Hay alguna propiedad que te gustaría comentar?',
  },
  {
    title: '5. Offer a conversation or tour',
    en: 'Whenever you are ready, we can talk through your next steps or arrange a tour of a home that interests you. Would a call or a visit work better for you?',
    pt: 'Quando você estiver pronto, podemos conversar sobre os próximos passos ou organizar uma visita a um imóvel de seu interesse. Você prefere uma ligação ou uma visita?',
    es: 'Cuando estés listo, podemos hablar de los próximos pasos u organizar una visita a una vivienda que te interese. ¿Prefieres una llamada o una visita?',
  },
]

export default function FollowUpCopyboard() {
  const [language, setLanguage] = useState<Language>('en')
  const [area, setArea] = useState('Huntsville and Madison')
  const [copyStatus, setCopyStatus] = useState('')

  const copy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopyStatus(`Message ${index + 1} copied. Review it before sending.`)
    } catch {
      setCopyStatus(
        `Could not copy message ${index + 1}. Select the text and copy it manually.`
      )
    }
  }

  return (
    <main className="follow-up">
      <Head>
        <title>Follow-up Copyboard | Becca Travis</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="content">
        <header>
          <p className="eyebrow">A conversation, in your words</p>
          <h1>Follow-up copyboard</h1>
          <p>
            Choose a language, add an area, and copy a message to personalize before you
            send it.
          </p>
          <p className="note">
            Messages are copied in your browser. This page does not send or schedule them.
          </p>
        </header>

        <div className="controls">
          <label htmlFor="followup-area">
            Community or area
            <input
              id="followup-area"
              value={area}
              maxLength={100}
              onChange={event => setArea(event.target.value)}
            />
          </label>
          <div>
            <span className="label">Language</span>
            <div className="language-buttons" role="group" aria-label="Message language">
              {(
                [
                  ['en', 'English'],
                  ['pt', 'Português'],
                  ['es', 'Español'],
                ] as [Language, string][]
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={language === value}
                  onClick={() => setLanguage(value)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <p className="status" role="status" aria-live="polite">
          {copyStatus}
        </p>
        <div className="message-list">
          {messages.map((item, index) => {
            const text = item[language].replace('{area}', area.trim() || 'the area')
            return (
              <article className="message" key={item.title}>
                <div>
                  <h2>{item.title}</h2>
                  <p>{text}</p>
                </div>
                <button type="button" onClick={() => copy(text, index)}>
                  Copy message
                </button>
              </article>
            )
          })}
        </div>
      </div>
      <style jsx>{`
        .follow-up {
          background: #fbf7f5;
          color: #392c33;
          min-height: 75vh;
          padding: 64px 24px 80px;
        }
        .content {
          max-width: 1000px;
          margin: 0 auto;
        }
        header {
          max-width: 700px;
        }
        .eyebrow {
          color: #8d4967;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        h1 {
          color: #59223f;
          font-size: clamp(38px, 5vw, 54px);
          font-weight: 500;
          line-height: 1.1;
          margin: 12px 0;
        }
        header p:not(.eyebrow) {
          line-height: 1.7;
          margin-top: 10px;
        }
        .note {
          color: #766770;
          font-size: 13px;
        }
        .controls {
          align-items: end;
          background: #fff;
          border: 1px solid #eadfe4;
          border-radius: 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          margin-top: 34px;
          padding: 22px;
        }
        label {
          flex: 1 1 260px;
        }
        label,
        .label {
          color: #51434b;
          display: block;
          font-size: 13px;
          font-weight: 600;
        }
        input {
          background: #fff;
          border: 1px solid #d9cbd2;
          border-radius: 8px;
          color: #392c33;
          display: block;
          margin-top: 8px;
          min-height: 44px;
          padding: 10px 12px;
          width: 100%;
        }
        .language-buttons {
          display: flex;
          gap: 6px;
          margin-top: 8px;
        }
        button {
          border: 1px solid #d7c3cd;
          border-radius: 999px;
          color: #6d294c;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          min-height: 42px;
          padding: 9px 15px;
        }
        button[aria-pressed='true'] {
          background: #6d294c;
          border-color: #6d294c;
          color: #fff;
        }
        button:hover {
          box-shadow: 0 2px 10px rgba(55, 29, 41, 0.12);
        }
        button:focus-visible,
        input:focus-visible {
          outline: 3px solid #bc83a0;
          outline-offset: 2px;
        }
        .status {
          color: #6d294c;
          font-size: 13px;
          min-height: 22px;
          margin: 12px 0 4px;
        }
        .message-list {
          display: grid;
          gap: 12px;
        }
        .message {
          align-items: start;
          background: #fff;
          border: 1px solid #eadfe4;
          border-radius: 14px;
          display: flex;
          gap: 20px;
          justify-content: space-between;
          padding: 22px;
        }
        h2 {
          color: #4b2a3b;
          font-size: 19px;
          font-weight: 600;
          margin: 0;
        }
        .message p {
          color: #5d5158;
          font-size: 15px;
          line-height: 1.7;
          margin: 8px 0 0;
        }
        .message button {
          flex: 0 0 auto;
        }
        @media (max-width: 600px) {
          .follow-up {
            padding: 44px 18px 60px;
          }
          .message {
            flex-direction: column;
          }
          .controls {
            padding: 18px;
          }
        }
      `}</style>
    </main>
  )
}
