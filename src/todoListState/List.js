import React from 'react';

import './list.css';

function List({onListClick, id, name}){
  return (
    <div className="item" >{name}<button onClick={(e)=>onListClick(id)} className="close"><i className="fa fa-close"></i></button></div>
  )
}

export default List;
