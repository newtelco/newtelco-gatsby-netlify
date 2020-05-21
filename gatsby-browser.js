import 'lazysizes'

import CustomLayout from './wrapPageElement'

require('prismjs/themes/prism-tomorrow.css')

export const wrapPageElement = CustomLayout

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    'This application has been updated. ' +
      'Reload to display the latest version?'
  )

  if (answer === true) {
    window.location.reload()
  }
}
