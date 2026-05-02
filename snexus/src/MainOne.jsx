import './App.css'

function MainOne() {
  return (
    <div className="MainOne">
      <h1>Marketing que gera <span>resultado</span> de verdade</h1>
      <p>Estrategias personalizadas para atrair, engajar e converter mais clientes para o seu negocio.</p>
      <div className='MainOne-buttons'>
        <button className='buttonEspecialista' onClick={() => {
          const message = "Olá, gostaria de falar com um especialista sobre os serviços da Snexus.";
          const phoneNumber = "5584999891704";
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          window.open(whatsappUrl, '_blank');
        }}>FALE COM UM ESPECIALISTA</button>
        <button className='buttonServicos' onClick={() => {
  document.getElementById("servicos").scrollIntoView({
    behavior: "smooth"
  });
}}>SERVIÇOS</button>
      </div>
    </div>
  );
};

export default MainOne;