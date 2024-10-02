
// import React, { useState } from 'react'

// const Navbar = ({ title}) => {
//   let [mode, setMode] = useState('light');

//   const handleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = '#333'; 
//       document.body.style.color = '#fff'; 
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = '#fff'; 
//       document.body.style.color = '#000'; 
//     }
//   };

//   return (
//     <>
//       <nav className={`navbar bg-${mode} navbar-expand-lg`}>
//         <div className="container-fluid">
//           <a className={`navbar-brand ${mode === 'dark' ? 'text-light' : 'text-dark'}`} href="#">{title}</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className={`nav-link ${mode === 'dark' ? 'text-light' : 'text-dark'} active`} aria-current="page" href="/">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className={`nav-link ${mode === 'dark' ? 'text-light' : 'text-dark'} active`} aria-current="page" href="/aboutus">About Us</a>
//               </li>
//               <li className="nav-item">
//                 <a className={`nav-link ${mode === 'dark' ? 'text-light' : 'text-dark'} active`} aria-current="page" href="/login">Login </a>
//               </li>
//               <li className="nav-item">
//                 <a className={`nav-link ${mode === 'dark' ? 'text-light' : 'text-dark'} active`} aria-current="page" href="/signup">Signup</a>
//               </li>
              
//             </ul>
//             <form className="d-flex" role="search">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//         <div className="m-2 form-check form-switch">
//           <input className="form-check-input" onClick={handleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
//           <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navbar;
import React, { useState } from 'react'

 const NavBar = ({ title }) => {
    let [mode, setMode] = useState('light')

  const handleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#333'; 
      document.body.style.color = '#fff'; 
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff'; 
      document.body.style.color = '#000'; 
    }
  };
  return (
    <>
    <div>
    <nav className={`navbar bg-${mode} navbar-expand-lg`}>
        <div className="container-fluid">
          <a className={`navbar-brand ${mode === 'dark' ? 'text-light' : 'text-dark'}`} href="#">{title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link ${mode === 'dark' ? 'text-light' : 'text-dark'} active`} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${mode === 'dark' ? 'text-light' : 'text-dark'} active`} aria-current="page" href="/Aboutus">About Us</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${mode === 'dark' ? 'text-light' : 'text-dark'} active`} aria-current="page" href="/Login">Login</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${mode === 'dark' ? 'text-light' : 'text-dark'} active`} aria-current="page" href="/Signup">Sign Up</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className="m-2 form-check form-switch">
          <input className="form-check-input" onClick={handleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </nav>
    </div>
    </>
  )
}
export default NavBar