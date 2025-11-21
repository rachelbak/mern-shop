import { useEffect, useState } from 'react'
import './App.css'
// import ParrotList from './pages/ParrotsList'
import NavBar from './components/NavBar'
import Router from './components/Router'
import { useDispatch } from "react-redux";
import { userIn } from "./features/userSlice.js";

function App() {

  return (
    <>
      <NavBar />
      <Router />
    </>
  )
}

export default App
