import React, { useState } from 'react';
import './directory.styles.scss';
import  MenuItem  from '../menu-item/menu-item.component';
import DIRECTORY_DATA from './directory.data.js';

const Directory = () => {
    
  const [sections] = useState(DIRECTORY_DATA);

    
        return ( 
            <div className="directory-menu">
            {sections.map( ({id,...otherProps}) => 
            <MenuItem
            key={id}
            {...otherProps}
            />)}
        </div>
         );
    
}
 
export default Directory;