import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignInSide from './singIn';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <SignInSide />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate: (registration) => {
    registration.unregister().then(() => {
      window.location.reload();
    });
  },
  onSuccess: (registration) => {
    console.info("service worker on success state");
    console.log(registration);
  },
});
