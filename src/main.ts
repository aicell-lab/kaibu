import './style.css'
import kaibuLogo from '/static/img/kaibu-icon.svg'
import { setupCounter } from './counter.ts'

const testElement = `
  <div>
    <a href="https://kaibu.org" target="_blank">
      <img src="${kaibuLogo}" class="logo" alt="Kaibu logo" />
    </a>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p>
      This is the new Kaibu!
    </p>
  </div>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = testElement
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
