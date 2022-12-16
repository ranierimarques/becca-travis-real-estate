import React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

const Checkbox = ({ checked }: { checked: boolean }) => (
  <form>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <CheckboxPrimitive.Root className="CheckboxRoot" defaultChecked id="c1">
        <CheckboxPrimitive.Indicator className="CheckboxIndicator">
          {checked === true && <CheckIcon />}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label className="Label" htmlFor="c1">
        Accept terms and conditions.
      </label>
    </div>
  </form>
)

export default Checkbox
