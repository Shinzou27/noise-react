import './App.css'
import UnityApp from './UnityApp';
import git from './assets/giticon.svg';

function App() {
  return (
    <div className='container'>
    <div id='navbar' className='navbar-container'>
      <span>Ruídos na computação gráfica</span>
      <a target='_blank' href="https://github.com/Shinzou27/noise-playground">
      <img src={git} /></a>
    </div>
    <UnityApp/>
    </div>
  )
}

export default App;
