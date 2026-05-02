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
        <a href="#contact" className="nav-link">Contato</a>
        <a href="#contact" className="nav-link">Sobre nós</a>
        <a href="#servicos" className="nav-link">Serviços</a>
        <button className="nav-button" onClick={() => {
          const message = "Olá, gostaria de falar com um especialista sobre os serviços da Snexus.";
          const phoneNumber = "5584999891704";
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          window.open(whatsappUrl, '_blank');
        }}>Fale conosco</button>
    </div>
    );
}

export default Header