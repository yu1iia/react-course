import React from 'react';
import PaintingList from './components/PaintingList';
import Logo from './components/Logo';
import Panel from './components/Panel';
import paintings from './paintings.json';

const App = () => {
  return (
    <div>
      <Panel />
      <Logo text="Главный компонент-контейнер приложения" />

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
