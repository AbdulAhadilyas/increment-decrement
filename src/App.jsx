import { useState } from 'react'
import './App.css'
import ToglleSwitch from './component/toggle'
export default function App() {
  const [counter, setCounter] = useState(0)
  const [isLit, setLit] = useState(true);
 
  const clickHandler = () => {
    setLit(!isLit);
     document.documentElement.setAttribute('data-theme',  isLit ? "light" : "dark")
  }




  let animateButton = function (e) {
    e.preventDefault();
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
      e.target.classList.remove('animate');
    }, 900);
  };

  let bubblyButtons = document.getElementsByClassName("bubbly-button");

  for (let i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }


  return (
    <>
    <div className='toggle'>
      <h1>Counter </h1>
      </div>
      <div className="toggler">
      <ToglleSwitch sx={{ m: 2 }} onClick={clickHandler}  />
      </div>
      <div className='center'>
        <div className='counter'>
          <h2>{counter}</h2>
        </div>
        <div className='button '>
          <button onClick={() => {
            setCounter(counter + 1)
          }} className="bubbly-button">increment</button>
          <button onClick={() => {
            setCounter(counter - 1)
          }} className="bubbly-button" >decrement</button>
        </div>
      </div>
    </>
  )
}

