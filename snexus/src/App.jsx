import './App.css'
import Header from './Header'
import MainOne from './MainOne'
import MainTwo from './MainTwo'
import TelaTwo from './TelaTwo'
import TelaThree from './TelaThree'
import TelaFour from './TelaFour'
import Contato from './Contato'

function App() {
  return (
    <>
      <Header />
      <div className='MainDisplay'>
        <MainOne />
        <MainTwo />
      </div>
      <TelaTwo />
      <TelaThree />
      <TelaFour />
      <Contato />
    </>
  );
}

export default App;
