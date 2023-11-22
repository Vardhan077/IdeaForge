// import './index.css'
// import { Link } from 'react-router-dom'

// const Header = () =>{
//     return(
//         <header className="dracula-theme">
//             <nav>
//             <ul>
//                 <Link to = '/textArea'>
//                     <p>Add Post</p>
//                 </Link>
//             </ul>
//             </nav>
//         </header>

//     )
// }

// export default Header




import React from 'react';
import './index.css'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="dracula-theme">
      <nav>
        <ul>
          <li className='p'>
            <h1>IdeaForge</h1>
            <Link to="/textArea" className='b'>
               <button className='button'>Add Post</button> 
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
