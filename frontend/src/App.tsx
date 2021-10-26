import React from 'react'
import { Button } from '@material-ui/core'
import ThemeWrapper from './wrappers/ThemeWrapper/index'
import './styles.css'
import IMA from '../public/logo192.png'

const App: React.FC = () => (
  <React.StrictMode>
    <ThemeWrapper>
      <div className="App">
        <h1> hello</h1>
        <img src={IMA} alt="sdfsd" width="300" height="300" />
        <header className="App-header" />
        React App
        <Button variant="contained">Test Button</Button>
      </div>
    </ThemeWrapper>
  </React.StrictMode>
)

export default App
