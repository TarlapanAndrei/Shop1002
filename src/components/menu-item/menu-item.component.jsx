import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';
const MenuItem = ({title, imageUrl, size, history, match}) => {
  return(
  <div className={`${size} menu-item`}>
    <div 
    style={{
      backgroundImage:`url(${imageUrl})`
    }}
    className='background-image'/>
       <div className='content' onClick={()=>history.push(`${match.url}shop/${title}`)}>
        <h1 className='title'>
          {title.toUpperCase()}
        </h1>
        <span className='subtitle'>
           Shop Now
        </span>
       </div>
      </div>
)}
export default withRouter(MenuItem);