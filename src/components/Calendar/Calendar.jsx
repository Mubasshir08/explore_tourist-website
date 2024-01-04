import React from 'react';
import { Calendar as PrimeCalendar } from 'primereact/calendar'; 

import './Calendar.css'

const Calendar = ({firstDate, setFirstDate, lastDate, setLastDate}) => {
  return (
    <div>
            <PrimeCalendar inputId='bookingFirstDate' placeholder='Arriving Date&Time' value={firstDate} onChange={(e) => setFirstDate(e.value)} showButtonBar showTime showIcon className='border border-gray-400 w-3/5 my-3 p-2 relative outline-none'/>
            <PrimeCalendar inputId='bookingFirstDate' placeholder='Checkout Date&Time' value={lastDate} onChange={(e) => setLastDate(e.value)} showButtonBar showTime showIcon className='border border-gray-400 w-3/5 my-3 p-2 relative outline-none'/>
    </div>
  )
}

export default Calendar
