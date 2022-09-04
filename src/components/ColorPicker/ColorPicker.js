import React, { Component } from 'react';
import classNames from 'classnames';
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

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === this.state.activeOptionIdx,
    });

    // const optionClasses = ['ColorPicker__option'];

    // if (index === this.state.activeOptionIdx) {
    //   optionClasses.push('ColorPicker__option--active');
    // }

    // return optionClasses.join(' ');
  };

  render() {
    const { options } = this.props;
    const { activeOptionIdx } = this.state;

    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={classNames('ColorPicker__option', {
                  'ColorPicker__option--active': index === activeOptionIdx,
                })}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
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
