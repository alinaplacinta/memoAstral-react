import logo from './logo.svg';
import './App.css';

function App() {
  const cardsItems = [];
  let cardsNumber;
  let min = 4;
  let max = 16;
 cardsNumber = Math.floor(Math.random()*(max-min+1)+min);
  if (cardsNumber%2 !== 0) {
    cardsNumber = cardsNumber +1;
  }
  for (let i=0; i<=cardsNumber-1; i++)
  {
    cardsItems.push(
        <div class="card-scene">
          <div class="card-inner">
            <div class="card-front"></div>
            <div class="card-back"></div>
          </div>
        </div>
      )
  }

  

   
  return (
    <div class="main-background">
    <div class="grid">
      <div class="header">
        <div class="menu">
          <div class="hamburger-container">
            <div class="hamburger-line h-line-top">
              <div class="dot"></div>            
              <div class="line line1"></div>
              <div class="dot"></div>
            </div>
            <div class="hamburger-line h-line-middle">
              <div class="dot"></div>            
              <div class="line line2"></div>
            </div>
            <div class="hamburger-line h-line-bottom">
              <div class="dot"></div>            
              <div class="line"></div>
            </div>
        </div>
      
        <div class="dropdown-container">
          <div class="vertical-menu">
            <a href="#">Joc 0</a>
            <a href="#">Joc 1</a>
            <a href="#">Joc 2</a>
            <a href="#">Joc 3</a>
            <a href="#">Joc 4</a>
          </div>
        </div>
        </div>
  
        <div class="count-container">
          <div class="count-container-col score">
            Scor:
            <div class="real-score">5/10</div>
          </div>
          <div class="count-container-col counter">
            Timp:
            <div class="remained-time">00.00</div>
          </div>
        </div>
      </div>

      <div class="sun-container">
        <div class="animated-obj"></div>
      </div>


      <div class="main-container">
        <div class="cards-container">
         {cardsItems}           
        </div>
        <div class="buttons-container">
          <button class="btn btn1">Joc Nou</button> 
          <button class="btn btn2">Zapaceste</button> 
        </div>
      </div>
      
      <div class="animation-container">
        <div class="animated-line animated-line1"></div>
        <div class="dotted-circles">
          <div class="center-circle"></div>
        </div>
        <div class="animated-line animated-line2"></div>

      </div>
      
    </div>
 
  </div>
  );
}

export default App;
