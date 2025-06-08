import '../css/newPlanForm.css'
import { useState, useEffect } from 'react'
import React from 'react'

function NewPlanForm() {
  const [expenses, setExpenses] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [planName, setPlanName] = useState('')
  const [allPlans, setAllPlans] = useState({})

  // Load saved plans on first render
  useEffect(() => {
    const savedPlans = JSON.parse(localStorage.getItem("plans")) || {};
    setAllPlans(savedPlans);
  }, [])

  const handleInput = (e) => setInputValue(e.target.value)
  const handlePlanNameChange = (e) => setPlanName(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim() !== '') {
      setExpenses(prev => [...prev, inputValue])
      setInputValue('')
    }
  }

  const saveTemplate = (e) => {
    e.preventDefault()
    if (planName.trim() === '') return alert("Please enter a plan name.")

    const updatedPlans = { ...allPlans, [planName]: expenses }
    localStorage.setItem("plans", JSON.stringify(updatedPlans))
    setAllPlans(updatedPlans)
  }

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

        <form onSubmit={saveTemplate}>
          <input
            className="form-input"
            value={planName}
            onChange={handlePlanNameChange}
            placeholder="Enter plan name"
          />
          <button type="submit">Save Plan</button>
        </form>

        <ul className='expense-tracking'>
          {expenses.map((expense, index) => (
            <li key={index}>{expense}</li>
          ))}
        </ul>
      </div>

      <div className='other-plans'>
        <h3>Saved Plans</h3>
        {Object.entries(allPlans).map(([name, expenses], index) => (
          <div key={index}>
            <h4>{name}</h4>
            <ul>
              {expenses.map((exp, i) => (
                <li key={i}>{exp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default NewPlanForm
