import './App.css'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'

function TelaTwoDown() {
  return (
    <div className="telaTwoDown">
        <div className="containerServicos">
            <img src={img1} alt="img1" />
            <h3>Gestão de Tráfego</h3>
            <p>Campanhas inteligentes que geram mais leads, vendas e retorno sobre o investimento.</p>
        </div>
        <div className="containerServicos">
            <img src={img2} alt="img2" />
            <h3>Marketing de Conteúdo</h3>
            <p>Conteúdo estratégico que atrai, educa e posiciona sua marca como autoridade no setor.</p>
        </div>
        <div className="containerServicos">
            <img src={img3} alt="img3" />
            <h3>Social Media</h3>
            <p>Gestão de redes sociais com foco em engajamento, relacionamento e resultados.</p>
        </div>
        <div className="containerServicos">
            <img src={img4} alt="img4" />
            <h3>Funis de Vendas</h3>
            <p>Estrategias e automações que guiam o lead até a compra de forma previsivel.</p>
        </div>
        <div className="containerServicos">
            <img src={img5} alt="img5" />
            <h3>SEO & Performance</h3>
            <p>Mais visibilidade no Google e melhor performance para gerar trafego qualificado.</p>
        </div>

    </div>
  );
};

export default TelaTwoDown;
