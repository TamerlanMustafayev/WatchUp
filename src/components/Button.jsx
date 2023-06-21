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
  
  function total() {
    let total= count*249;
    return total
  }

    return (
      <>
        <h2>$249</h2>
      <div className = "quantity-selection flex flex-jc-c">
        <button onClick={increment}>
          +
        </button>
        <input type="text"  className="amount " value={count} />
        <button onClick={decrement}>
          -
        </button>
      </div>
        <button className="atc" > Add to cart ${total()}</button>
        </>
            );
            
  }

export default Button