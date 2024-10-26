import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {

const actors = ['sakib', 'rofik', 'sahed', 
  'rizvi', 'sayam']

const books = [
  {id:1, name: 'physics', price: 100},
  {id:2, name: 'chemistry', price: 120},
  {id:3, name: 'biology', price: 150},
  {id:4, name: 'global-studies', price: 200},
]

const singers = [
  {name: 'dr. mahfujur rahman', age: 68},
  {name: 'Eva rahman', age: 38},
  {name: 'shuveo dev', age: 28},
  {name: 'rahamn rizvi', age: 18}
]
  return (
  <>
  <h1>Vite + React</h1>
  <BookStore books={books}></BookStore>

    {
    singers.map(singer => <Singer singer=
    {singer}></Singer>)
    }

  <Actor name={"bappa raz"}></Actor>
    {
    actors.map(actor =><Actor name=
    {actor}></Actor>)
    }
{/* <Todo 
  task="Learn React" 
  isDone={true}></Todo>
<Todo 
  task="Core concepts" 
  isDone={false}></Todo>
<Todo 
  task="Try JSX" 
  isDone={true}></Todo> */}
  {/* <Device name="Laptop" price="120000"></Device>
  <Device name="Mobile" price="14000"></Device>
  <Device name="watch" price="3000"></Device>
  <Person></Person>
  <Person1 grade="7" score="10"></Person1>
  <Person1 grade={12} score="13"></Person1>
  <Person1></Person1>
  <Developer></Developer> */}
  </>
  )
}
function Device(props){
  //console.log(props);
  return (
    <h2>This Device : {props.name} price : {props.price}</h2>
  )
}
function Person(){
  const money = 45;
  const age = 20;
  const student = {name: 'rahman rizvi', boyos: 23}
  return <h3>my name is {student.name} : {money + age}</h3>
}

const {grade, score} = {grade: '7', score: '10'}

function Person1({grade=1, score=0}){
  console.log(grade, score)
  return (
  <div className='student'>
   <h3>This is a Student</h3>
   <p>name : {grade}</p>
   <p>age : {score}</p>
  </div>
  )
}
function Developer(){
  const developerStyle = {
    borderRadius : '10px',
    padding: '20px',
    margin: '20px',
    border: '2px solid purple',
  }
  return(
    <div style={developerStyle}>
      <h3>devoloper</h3>
      <p>name : vs code</p>
    </div>
  )
}

export default App
