import logo from "./assets/logo.png";
import './App.css'
import contato from './Contato'
import TelaTwo from "./TelaTwo";

function Header() {
  return (
    <div className="Header">
        <div className="logo">
          <img src={logo} alt="Logo" width={120}/>
        </div>
        <nav id="menu" className="menu">
          <ul>
            <li><a href="#contact" className="nav-link">Contato</a></li>
            <li><a href="#contact" className="nav-link">Sobre nós</a></li>
            <li><a href="#servicos" className="nav-link">Serviços</a></li>
          </ul>
        </nav>
        <button className="nav-button" onClick={() => {
          const message = "Olá, gostaria de falar com um especialista sobre os serviços da Snexus.";
          const phoneNumber = "5584999891704";
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          window.open(whatsappUrl, '_blank');
        }}>Fale conosco</button>
        <button id="menu-btn" onClick={() => {
          const menu = document.getElementById('menu');
          const btn = document.getElementById('menu-btn');
          menu.classList.toggle('active');
          document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove("active");
  }
});
        }}>☰</button>
    </div>
    );
}

export default Header
