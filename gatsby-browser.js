import 'lazysizes'

require('prismjs/themes/prism-tomorrow.css')

import CustomLayout from './wrapPageElement'

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
