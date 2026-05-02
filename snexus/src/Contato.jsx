import './App.css'
import logo from './assets/logo.png'

function Contato() {
  return (
    <div id='contact'>
    <div className="contato">
        <div id='sobre'>
        <img src={logo} alt="Logo" />
        <br />
        <p>Somos uma agência de marketing digital focada em estratégias personalizadas que geram crescimento sustentável e resultados reais.</p>
        </div>
        <div>
        <h1>Contato</h1>
        <br />
        <p>Instagram: @snexuspulsern</p>
        <p>Telefone: (84) 9 9989-1704</p>
        <p>Caicó - RN</p>
        </div>
        <div>
        <h1>Serviços</h1>
        <br />
        <p>Gestão de Tráfego</p>
        <p>Marketing de Conteúdo</p>
        <p>Social Media</p>
        <p>Funis de Vendas</p>
        <p>SEO & Performance</p>
        </div>
        </div>
        <footer>
        <p>© 2026 Snexus. Todos os direitos reservados.</p>
        </footer>
    </div>
  );
};

export default Contato;