import React from 'react';

const Navigation = props => {
    return(
        <div>
            <h1>Inside Navigation</h1>
           
               {props.children}
        </div>
    );
}

export default Navigation;