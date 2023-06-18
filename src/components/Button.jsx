import React, { useState } from "react";


function Button() {
    const [count, setCount] = useState(0); 
    function increment() {
      setCount(function (prevCount) {
          return (prevCount += 1);
          
      });
    }
  
    function decrement() {
      setCount(function (prevCount) {
        if (prevCount > 0) {
          return (prevCount -= 1);
        } else {
          return (prevCount = 0);
        }
      });
    }

    return (
        <>
      <div className = "quantity-selection flex flex-jc-c">
        <button onClick={increment}>
          +
        </button>
        <input type="text"  className="amount " value={count} />
        <button onClick={decrement}>
          -
        </button>
        </div>
        <button className="atc" > Add to cart $</button>
        </>
            );
            
  }

export default Button