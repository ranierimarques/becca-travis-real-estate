import { useState } from 'react'
import * as S from './dev-tools.styles'

export function DevTools() {
  const [designMode, setDesignMode] = useState(false)

  function toggleDesignMode() {
    if (!designMode) {
      document.designMode = 'on'
      setDesignMode(oldDesignMode => !oldDesignMode)
      return
    }

    setDesignMode(oldDesignMode => !oldDesignMode)
    document.designMode = 'off'
  }

  return (
    <S.Container>
      <S.Button onClick={toggleDesignMode} active={designMode}>
        Design Mode: <strong>{designMode ? 'On' : 'Off'}</strong>
      </S.Button>
    </S.Container>
  )
}
