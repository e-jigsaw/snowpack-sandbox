import { h, Component, render } from '/web_modules/preact.js'
import htm from '/web_modules/htm.js'
import css from '/web_modules/csz.js'

const html = htm.bind(h)

const style = css`
  color: #f00;
`

const app = html`
  <div class="${style}">yo yo</div>
`

render(app, document.getElementById('app'))
