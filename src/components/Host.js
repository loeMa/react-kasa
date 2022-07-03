import React from 'react';

const Host = (host) => {

    return (
        <div className='host'>
            <h2>{host.data.name}</h2>
            <img src={host.data.picture} alt='profil host' />
        </div>
    );
};

export default Host;