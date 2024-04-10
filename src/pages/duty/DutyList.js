import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DutyList = () => {
  const [value, onChange] = useState(new Date());
  
  return (
    <div>
        <Calendar onChange={handleDateChange} value={value}></Calendar>
    </div>
  );
};

export default DutyList;