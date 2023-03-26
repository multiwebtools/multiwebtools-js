export { render }

import { createApp } from './app'
import './index.css'

async function render(pageContext) {
  const app = createApp(pageContext)
  app.mount('#app')
}
