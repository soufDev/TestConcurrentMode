import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TabProvider } from './components/store';

const Tree = (
  <TabProvider>
    <App />
  </TabProvider>
)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(Tree, div);
  ReactDOM.unmountComponentAtNode(div);
});
