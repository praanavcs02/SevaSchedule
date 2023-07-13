import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar as Volunteer, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

const localizer = momentLocalizer(moment);

const values = [
    {
        day : "13",
        endTime : "14",
        fooditems : "Fruit",
        month : "6",
        name : "Pranav",
        password : "asfasf",
        startTime : "12"
    },
    {
        day : "12",
        endTime : "10",
        fooditems : "Oatmeal",
        month : "6",
        name : "Bob",
        password : "asfasf",
        startTime : "12"
    }
]

const events = values.map(returnDate);

/*[
  {
    title: 'Volunteer Event',
    start: new Date(2023, 6, 3, 10, 0),
    end: new Date(2023, 6, 3, 12, 0),
  },
  {
    title: 'Another Event',
    start: new Date(2023, 6, 2, 14, 0),
    end: new Date(2023, 6, 2, 16, 0),
  }
  // Add more events here...
];*/



function returnDate(item) {
    return (
        {
            title : [item.name, item.fooditems].join(": "),
            start: new Date(2023, item.month, item.day, item.startTime, 0, 0),
            end: new Date(2023, item.month, item.day, item.endTime, 0, 0)
        }
    )
}

function Calendar() {
  return (
    <div className="calendar-container">
      <h1 className='heading'>Volunteer Calendar</h1>
      <Link className="heading" to="/editday">Choose Date</Link>
      <Volunteer localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500 }}/>
    </div>
  );
}

export default Calendar;
