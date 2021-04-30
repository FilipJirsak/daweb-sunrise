export const Footer = (props) => {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>Czechitas, ${props.kurz}</p>
  `;

  return footer;
}