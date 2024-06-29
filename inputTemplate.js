import React, { useState } from 'react';

function InputFormTemplate() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
    setShowResults(false);
  };

  return (
    <div>
      <form>
        <div>Enter Input 1</div>
        <input
          type="text"
          value={input1}
          placeholder="Set input 1"
          onChange={handleInputChange(setInput1)}
        />

        <div>Enter Input 2</div>
        <input
          type="text"
          value={input2}
          placeholder="Set input 2"
          onChange={handleInputChange(setInput2)}
        />

        <div>Enter Input 3</div>
        <input
          type="text"
          value={input3}
          placeholder="Set input 3"
          onChange={handleInputChange(setInput3)}
        />

        <div>Enter Input 4</div>
        <input
          type="text"
          value={input4}
          placeholder="Set input 4"
          onChange={handleInputChange(setInput4)}
        />
      </form>
      <button onClick={() => setShowResults(true)}>Show Results</button>
    </div>
  );
}

export default InputFormTemplate;