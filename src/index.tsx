import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'features';
import { Provider } from "react-redux";
import { ThemeProvider } from 'react-jss'
import configureStore from "store";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { theme } from "./assets/theme";
import reportWebVitals from './reportWebVitals';

import 'assets/global.scss';

const bootstrap = async () => {
  const store = configureStore()

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <DndProvider backend={HTML5Backend}>
            <App />
          </DndProvider>
        </ThemeProvider>
      </Provider>,
    </React.StrictMode>,
    document.getElementById('root')
  );
};
bootstrap();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
