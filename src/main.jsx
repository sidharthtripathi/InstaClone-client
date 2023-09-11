import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import "./index.css"
Array.prototype.revMap = function(cb){
  const arr = []
  for(let i = this.length-1 ; i>=0 ; i--)
  arr.push(cb(this[i]))
  return arr;
}
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  
)
