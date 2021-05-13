import React, { useState } from 'react';
import questions from './data';
import SingleQuestion from './Question';
function App() { 
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Log In</h3>
        <section className="info">
          {questions.map((question)=>{return <SingleQuestion key={question.id} {...question}/>})}
        </section>
      </div>
    </main>
  );
}

export default App;
