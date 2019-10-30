import React from 'react';

function App1(props) {  // component
    if(props.name === 'react')
        return <div className="dada">this is valid statement</div>;
    return <div className="dada">this is invalid statement</div>;
}

export default Design;