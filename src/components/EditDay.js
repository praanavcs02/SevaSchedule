import React from 'react';
import './EditDay.css';

function EditDay() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
  };

  return (
    <div className="form-container">
      <h1 className="heading">Volunteer Form</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label>Food Items</label>
          <input type="text" id="fooditems" name="fooditems" required />
        </div>
        <div className="form-group">
          <label htmlFor="month">Month</label>
          <input type="number" id="month" name="month" required />
        </div>
        <div className="form-group">
          <label htmlFor="day">Day</label>
          <input type="number" id="day" name="day" required />
        </div>
        <div className="form-group">
          <label htmlFor="startTime">Starting Time (Military Time)</label>
          <input type="number" id="startTime" name="startTime" required />
        </div>
        <div className="form-group">
          <label htmlFor="endTime">Ending Time (Military Time)</label>
          <input type="number" id="endTime" name="endTime" required />
        </div>
        <div className="form-group">
          <label>Edit Password</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditDay;
