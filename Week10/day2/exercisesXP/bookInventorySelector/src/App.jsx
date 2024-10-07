import { useState } from 'react'
import store from './app/store.js'
import './App.css'
import BookList from "./BookList.jsx";
import {Provider} from "react-redux";

function App() {

  return (
    <Provider store={store}>
      <BookList />
    </Provider>
  )
}

export default App
