import "./Footer.css"


const Footer = () => {
  const imagenFondo= {
    backgroundImage:"url(/footer.png)"
  }
  return <footer className="footer" style= {imagenFondo}>
  <div className="redes">
    <a href="...">
      <img src="/facebook.png" alt="Facebook"/>
    </a>
    <a href="https://twitter.com/Josemiguel_010?=SEHDXUy8AmbEJDAlcoKC1A&s=09" target="_blank" rel="noopener noreferrer">
      <img src="/twitter.png" alt="twitter"/>
    </a>
    <a href="http://instagram.com/pascuas_29?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"  target="_blank" rel="noopener noreferrer">
      <img src="/instagram.png" alt="instagram"/>
    </a>

  </div>
  <img src="/logo.png" alt="logo" />
  <strong>Desarollado por Jose</strong>
</footer>

}

export default Footer