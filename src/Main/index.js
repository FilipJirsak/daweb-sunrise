import { Sunrise } from '../Sunrise';

export const Main = () => {
  const main = document.createElement('main');
  main.appendChild(Sunrise({ city: 'Praze', lat: 50.083333, lon: 14.416667 }));
  main.appendChild(Sunrise({ city: 'Brně', lat: 49.195278, lon: 16.608333 }));

  return main;
}