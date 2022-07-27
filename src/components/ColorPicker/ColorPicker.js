import React from 'react';
import './ColorPicker.css';

// const styles = {
//   option: {
//     display: 'inline-block',
//     margin: 4,
//     width: 40,
//     height: 40,
//   },
// };

const ColorPicker = ({ options }) => {
  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <div>
        {options.map(({ label, color }) => (
          <span
            key={label}
            className="ColorPicker__option"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
