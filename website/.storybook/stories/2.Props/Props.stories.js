import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import IntlTelInput from 'react-intl-tel-input/src/components/IntlTelInput'
import 'react-intl-tel-input/src/intlTelInput.scss'

storiesOf('Documentation', module)
  .addParameters({ options: { showAddonPanel: false } })
  .add(
    'Props',
    withInfo({ inline: true, source: false })(() => <IntlTelInput />),
  )
