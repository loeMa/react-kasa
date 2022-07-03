import React from 'react';

const Tag = (tag) => {
    
    return (
        <li className='tags'>
            <p>{tag.tag}</p>
        </li>
    );
};

export default Tag;