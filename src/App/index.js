import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'

export const App = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  container.appendChild(Header());
  container.appendChild(Main());
  container.appendChild(Footer({ kurz: 'Digitální akademie: Web' }));

  return container;
}

/*
export const App = () => {
  return `
  <header>
    <div class="logo"></div>
    <h1>Moje první aplikace</h1>
  </header>
  <main>
    <p>
      Startovací šablona pro webovou aplikaci v čistém JavaScriptu. Vytvořeno pomocí
      <a href="https://www.npmjs.com/package/create-czechitas-app">create-czechitas-app</a>.
    </p>
  </main>
  <footer>
    <p>Czechitas, Digitální akademie: Web</p>
  </footer>`;
}*/