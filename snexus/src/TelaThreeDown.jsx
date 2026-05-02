import './App.css'
import numero1 from './assets/numero-1.png'
import numero2 from './assets/numero-2.png'
import numero3 from './assets/numero-3.png'
import numero4 from './assets/numero-4.png'

function TelaThreeDown() {
  return (
    <div className="telaThreeDown">
      <div>
        <h3><img src={numero1} alt="Diagnóstico" className='numero'/> Diagnóstico</h3>
        <p>Analisamos o seu negocio, mercado e concorrencia para entender as oportunidades.</p>
      </div>
      <div>
        <h3><img src={numero2} alt="Estratégia" className='numero'/>  Estratégia</h3>
        <p>Desenvolvemos um plano personalizado com as melhores ações para seu objetivo.</p>
      </div>
      <div>
        <h3><img src={numero3} alt="Execução" className='numero'/> Execução</h3>
        <p>Colocamos tudo em prática com foco em performance, dados e otimização contínua.</p>
      </div>
      <div>
        <h3><img src={numero4} alt="Resultados" className='numero'/> Resultados</h3>
        <p>Acompanhamos, medimos e escalamos o que funciona para gerar crescimento real.</p>
      </div>
    </div>
  );
};

export default TelaThreeDown;