import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
  const logo = require('./assets/logo_1.png');

  return (
    <div>
      <h1 className="titulo">Hola Mundo</h1>
      <img src={logo.default} alt="Logo" />
    </div>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
