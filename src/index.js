import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeContext } from 'styled-components';
import { TabProvider } from './components/store';
import App from './App';
import theme from './theme';
import "./index.css"

const Container = (
    <ThemeContext.Provider value={theme}>
        <TabProvider>
            <App />
        </TabProvider>
    </ThemeContext.Provider>
)
ReactDOM.createRoot(document.getElementById('root')).render(Container);
