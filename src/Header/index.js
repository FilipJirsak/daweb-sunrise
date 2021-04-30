export const Header = () => {
  const header = document.createElement('header');
  header.innerHTML = `
    <div class="logo"></div>
    <h1>Moje první aplikace</h1>
  `;

  header.querySelector('.logo').addEventListener('click', () => alert('Zdravím tě!'));

  return header;
}