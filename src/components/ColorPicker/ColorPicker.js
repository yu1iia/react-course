import React, { Component } from 'react';
import './ColorPicker.css';

// const styles = {
//   option: {
//     display: 'inline-block',
//     margin: 4,
//     width: 40,
//     height: 40,
//   },
// };

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };
  render() {
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className="ColorPicker__option"
              style={{
                backgroundColor: color,
                border: (index = this.state.activeOptionIdx
                  ? '3px solid black'
                  : 'none'),
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

// const ColorPicker = ({ options }) => {
//   return (
//     <div className="ColorPicker">
//       <h2 className="ColorPicker__title">Color Picker</h2>
//       <div>
//         {options.map(({ label, color }) => (
//           <span
//             key={label}
//             className="ColorPicker__option"
//             style={{ backgroundColor: color }}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

export default ColorPicker;
