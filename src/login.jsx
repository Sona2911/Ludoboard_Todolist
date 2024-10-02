// import React from 'react'

// const login = () => {
//   return (
//     <div>
//     <div className="mb-3">
// <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
// <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
// </div>

// <div className="row g-3 align-items-center">
// <div className="col-auto">
//   <label htmlFor="inputPassword6" className="col-form-label">Password</label>
// </div>
// <div className="col-auto">
//   <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
// </div>
// <div className="col-auto">
//   <span id="passwordHelpInline" className="form-text">
//     Must be 8-20 characters long.
//   </span>
// </div>
// </div>
//   </div>
//   )
// }

// export default login



import React from 'react'
import { NavBar } from './Navbar1'

export const Login = () => {
  return (
    <>
    <NavBar/>
    <div className='text-center'>
        <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    </>
  )
}
