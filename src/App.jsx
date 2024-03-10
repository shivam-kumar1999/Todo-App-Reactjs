import React from 'react'
import './App.css'
import Taskform from './component/Taskform'
const App = () => {

  return (

    <div className='app'>
        <Taskform></Taskform>      
      <main className='main'>

        <section className='task'>section1</section>
        <section className='task'>section2</section>
        <section className='task'>section3</section>


      </main>
    </div>

  )
}

export default App