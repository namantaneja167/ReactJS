import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubit = (event) => {
    event.preventDefault();
    let amount = parseInt(count);

    if(amount<=0){
      amount=1
    }
    if(amount>8){
      amount=8
    }
    setText(data.slice(0,amount));
  };

  const inputHandler = (event) => {
    setCount(event.target.value);
  };
  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={inputHandler}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;