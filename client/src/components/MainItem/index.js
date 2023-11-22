// import { Link } from "react-router-dom"


// const MainItem = props =>{
//     const{item }=  props
//     const{id,name,para,description} = item 
//     console.log(item,'in itemset')

//     // const { match } = this.props

//     return(
//         <Link to = {`/smthng/${id}`} className="link" >
//             <li>
//                 <h2>
//                     {name}
//                 </h2>
//                 <p>{para}</p>
//             </li>
//         </Link>
//     )
// }

// export default MainItem


import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Import the CSS file

const MainItem = (props) => {
  const { item } = props;
  const { id, name, para } = item;

  return (
    <Link to={`/smthng/${id}`} className="main-item-link">
      <li className="main-item">
        <h2 className="main-item-title">{name}</h2>
        <p className="main-item-description">{para}</p>
      </li>
    </Link>
  );
}

export default MainItem;






