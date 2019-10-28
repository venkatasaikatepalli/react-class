import React from 'react';

function App1(props) {  // component
    if(props.name === 'react')
        return <div className="dada">this is valid statement</div>;
    return <div className="dada">this is invalid statement</div>;
}

function Design (props) {
    return (
        <div className="container-fluid">
            <br></br>
            <br></br>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary">
                        <App1 name={props.name}></App1>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Design;