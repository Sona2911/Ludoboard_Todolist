// import React from 'react'
// import Navbar from './Navbar'
// import TodoList from './TodoList'

// const Home = () => {
//   return (
//     <div>
//       <Navbar/>
//       <TodoList/>
//     </div>
//   )
// }

// export default Home



import React from 'react'
import { NavBar } from './Navbar1'
import { TodoList } from './TodoList'

export const Home = () => {
  return (
    <div>
        <NavBar title='TodoList'/>
        <TodoList/>
    </div>
  )
}
