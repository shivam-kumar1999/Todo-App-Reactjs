import React from 'react'
import './TaskForm.css'
import Tag from './Tag'

const Taskform = () => {

  return (

    <header className='header'>
        <form>
            <input type="text " className='input' placeholder='Enter your task' />

            <div className='taskform'>
                       <Tag tagName="HTMl"></Tag>
                       <Tag tagName="CSS"></Tag>
                       <Tag tagName="Javascript"></Tag>
                       <Tag tagName="React"></Tag>
                      

                       <select className='status'>
                            <option value="todo">ToDO</option>
                            <option value="doing"> Doing</option>
                            <option value="done" > Done</option>  
                      </select>   

                      <button type='submit' className='submit'> Add Task</button>                   
            </div>
        </form>
    </header>

  )
}

export default Taskform