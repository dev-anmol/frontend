import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Date({value,onChange}) {

  return (
    <div>
      <DatePicker
        selected={value}
        onChange={date => onChange(date)}
        dateFormat="MM-dd-yyyy"
        placeholderText="MM-dd-yyyy"
        className="border border-gray-300 focus:border-blue-500 px-4 py-2 rounded-md"
      />
    </div>
  );
}

export default Date;