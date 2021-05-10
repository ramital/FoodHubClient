import React, { useEffect } from 'react'
import { Redirect } from 'react-router';

const Logout = (props) => {
    return (
        <div>
            <Redirect to="/"></Redirect>    
        </div>
    );
}

export default Logout
