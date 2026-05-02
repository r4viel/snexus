import './App.css'
import foguete from './assets/rocket.svg'

function TelaFour() {
  return (
    <div className='telaFour'>
        <div className="caixaBranca">
        <img src={foguete} alt="foguetinho" />
        </div>
        <h1>Pronto para levar seu negócio para o <span>próximo nível?</span></h1>
        <div className="caixa">
        <p>Fale com um especialista e descubra como podemos acelerar seus resultados.</p>
        <button className='nav-button' onClick={() => {
          const message = "Olá, gostaria de falar com um especialista sobre os serviços da Snexus.";
          const phoneNumber = "5584999891704";
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          window.open(whatsappUrl, '_blank');
        }}>FALE COM UM ESPECIALISTA</button>
        </div>
    </div>
  );
};

export default TelaFour;