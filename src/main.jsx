import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainApp } from './09-useContext/MainApp';
import { BrowserRouter } from "react-router-dom";
//import { MultipleCustomHook } from './03-examples/MultipleCustomHook';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { Memorize } from './06-memos/Memorize';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { CounterApp } from './01-useState/CounterApp';
//import { HooksApp } from './HooksApp';
//import { MemoHook } from './06-memos/MemoHook';
//import { CallbackHook } from './06-memos/CallbackHook';
//import { Padre } from './07-tarea-memo/Padre';
// import { TodoApp } from './08-useReducer/TodoApp';
import './index.css';

//import './08-useReducer/intro-reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
