import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(<App/>, document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// const link = React.createElement('a', { href: 'reactjs.org', target: 'blank' }, 'link')

// const template = (
//   <div>
//     <img src={painting.url} alt={painting.title} width="480" />
//     <h2>{painting.title}</h2>
//     <p>
//       Автор: <a href={painting.author.url}>{painting.author.tag}</a>
//     </p>
//     <p>Цена {painting.price} кредитов</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );
// console.log(template);
