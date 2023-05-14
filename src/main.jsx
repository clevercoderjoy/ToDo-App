import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.jsx'
import { TaskContextProvider, TaskContext } from "./contexts/TaskContext.jsx";

export { TaskContext };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
    </Router>
  </React.StrictMode>
)
