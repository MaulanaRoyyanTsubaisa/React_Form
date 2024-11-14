import React, { useState } from "react";

function App() {
  const [inputNama, submitNama] = useState("");
  const [nama, setNama] = useState("");

  function handleChange() {
    submitNama(event.target.value);
  }

  function handleSubmit() {
    setNama(inputNama);
  }

  return (
    <div className="container">
      <h1>Hello {nama}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={inputNama}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
