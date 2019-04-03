import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const app = document.getElementById('app');

app ? ReactDOM.render(<h2>React App Boilerplate</h2>, app) : false;
