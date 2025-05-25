import '../css/newPlanForm.css';
import { useState } from 'react';
import React from 'react';

function NewPlanForm() {
  const [expenses, setExpenses] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setExpenses(prev => [...prev, inputValue]);
      setInputValue('');
    }
  };

  return (
    <>
      <div className='Form'>
        <form onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <input
              className="form-input"
              value={inputValue}
              onChange={handleInput}
              placeholder="Enter expense"
            />
            <button type="submit" className="submit-expense">Add</button>
          </div>
        </form>

        <ul className='expense-tracking'>
          {expenses.map((expense, index) => (
            <li key={index}>{expense}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NewPlanForm;
