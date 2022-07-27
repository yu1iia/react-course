import React from 'react';
import PaintingList from './components/PaintingList/PaintingList';
import Logo from './components/Logo';
import Panel from './components/Panel';
import paintings from './paintings.json';
import ColorPicker from './components/ColorPicker/ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => {
  return (
    <div>
      <ColorPicker options={colorPickerOptions} />
      <Panel />
      <Logo />

      <PaintingList paintings={paintings} />

      {/* <ul>
        {paintings.map(painting => (
          <li key={painting.id}>
            <Painting
              url={painting.url}
              title={painting.title}
              price={painting.price}
              profileUrl={painting.author.url}
              tag={painting.author.tag}
              quantity={painting.quantity}
            />
          </li>
        ))}
      </ul> */}
      {/* <Painting
        url={paintings[0].url}
        title={paintings[0].title}
        price={paintings[0].price}
        profileUrl={paintings[0].author.url}
        tag={paintings[0].author.tag}
        quantity={paintings[0].quantity}
      />

      <Painting
        url={paintings[2].url}
        title={paintings[2].title}
        price={paintings[2].price}
        profileUrl={paintings[2].author.url}
        tag={paintings[2].author.tag}
        quantity={paintings[2].quantity}
      /> */}
    </div>
  );
};

export default App;
