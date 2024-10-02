// import React from 'react'
// import TodoList from './TodoList'
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Home from './Home'
// import Error from './404'
// import AboutUs from './AboutUs'
// // import login from './login'
// // import signup 
// const App = () => {
//   return (
//   <Router>
//   <Routes>
//   <Route exact path ="/" element={<Home/>}/>
//   <Route exact path ="/todolist" element={<TodoList/>}/>
//   <Route exact path ="/aboutus" element={<AboutUs/>}/>
//   <Route exact path ="/login" element={<login/>}/>
//   <Route exact path ="/signup" element={<signup/>}/>
  
//   <Route  path ="*" element={<Error/>}/>
//   </Routes>
//   </Router>
// //     <div className='text-center'>
// // <Navbar title='ToDoList'/>
// //       // <LudoBoard/>
// //       // <TodoList/>
// //     </div>

//   )
// }

//export default App
import React from 'react'
// import { LudoBoard } from './LudoBoard'
// import { TodoList } from './TodoList'
// import { NavBar } from './NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { AboutUs } from './AboutUs'
import { Login } from './Login'
import { Signup } from './Signup'
import { E404 } from './E404'
 const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/Aboutus" element={<AboutUs/>}>
        </Route>
        <Route exact path="/Login" element={<Login/>}>
        </Route>
        <Route exact path="/Signup" element={<Signup/>}>
        </Route>
        <Route exact path="*" element={<E404 />}>
        </Route>
      </Routes>
    </Router>
  );
}
export default App
