import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar as Volunteer, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Volunteer Event',
    start: new Date(2023, 6, 3, 10, 0),
    end: new Date(2023, 6, 3, 12, 0),
  },
  {
    title: 'Another Event',
    start: new Date(2023, 6, 2, 14, 0),
    end: new Date(2023, 6, 2, 16, 0),
  },
  // Add more events here...
];

function Calendar() {
  return (
    <div className="calendar-container">
      <h1>Volunteer Calendar</h1>
      <Link to="/editday">Edit 2023-07-01</Link>
      <Volunteer localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500 }}/>
    </div>
  );
}

export default Calendar;
