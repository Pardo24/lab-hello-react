import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png'
import image1 from './images/icon1.png'
import image2 from './images/icon2.png'
import image3 from './images/icon3.png'
import image4 from './images/icon4.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <nav >
        <img className="imatgeL"src={logo} alt="logo" />
        <img className="imatgeM" src={menu} alt="menu" />
        </nav>
        <h1>Say hello to <br/>
        ReactJS
        </h1>
        <p>You will learn to use <br/>
        the most popular frontend library <br/>
        and become a super Ninja developer</p>

        
      </header>



      <body className='imatgesFinals'>

      <div>
      <img src={image1} alt="o"/>
      <h2>Declarative</h2>
      </div>

      <div>
      <img src={image2} alt="o"/>
      <h2>Components</h2>
      </div>

      <div>
      <img src={image3} alt="o"/>
      <h2>Single-Way</h2>
      </div>

      <div>
      <img src={image4} alt="o"/>
      <h2>JSX</h2>
      </div>

      </body>
    </div>
  );
}

export default App;
