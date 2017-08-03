import React from 'react';
import ReactDOM from 'react-dom';

const title = "My react setup";

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
