import React from 'react';
import PaintingList from './components/PaintingList/PaintingList';
// import AppBar from './components/AppBar/AppBar';
import Layout from './components/Layout/Layout';
import Notification from './components/Notification/Notification';
import Panel from './components/Panel/Panel';
import paintings from './paintings.json';
import ColorPicker from './components/ColorPicker/ColorPicker';
// import Container from './components/Container/Container';

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
    <Layout>
      <ColorPicker options={colorPickerOptions} />

      <Notification text="Всё хорошо" type="success" />

      <Notification text="Всё плохо" type="error" />

      <Panel>
        <PaintingList paintings={paintings} />
      </Panel>

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
    </Layout>
  );
};

export default App;
