import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore  } from 'redux';
import App from './App';
import { Reducer} from "./components/reducers/Reducer";
import './index.css';
import registerServiceWorker from './registerServiceWorker';


function saveToLocalStorage(state:any){
  localStorage.setItem("series",state.series[state.series.length-1]);
  localStorage.setItem("movies",state.movies[state.movies.length-1]);
  localStorage.setItem("message",state.message[state.message.length-1]);
}

function loadFromLocalStorage(){
  return{
    message:[String(localStorage.getItem("message"))],
    movies:[String(localStorage.getItem("movies"))],
    series:[String(localStorage.getItem("series"))]
  };
}




export const store = createStore(Reducer,loadFromLocalStorage());

store.subscribe(()=>saveToLocalStorage(store.getState()));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
