
import React, {useEffect, useState} from 'react'
import {Route, BrowserRouter, Routes } from 'react-router-dom'
// import Axios from 'axios'
// import {v4} from 'uuid'

// import Header from '../src/components/Header'
import Login from '../src/components/Login'
import MainPage from '../src/components/MainPage'
// import MainItem from '../src/components/MainItem'
import textArea from '../src/components/textArea'
import Comments from '../src/components/Comments'
import MainItemDesc from '../src/components/MainItemDesc'


function App () {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" Component={Login} />
          <Route exact path='/home' Component={MainPage} />
          {/* <Route exact path = '/MainItem' Component={MainItem} /> */}
          <Route exaxt path = '/smthng/:id' element = {<MainItemDesc />}/>
          <Route exact path = '/comments' Component={Comments} />
          <Route exact path = '/textArea' Component={textArea} />

        </Routes>
      </BrowserRouter>

      
    </div>
  )
}

export default App