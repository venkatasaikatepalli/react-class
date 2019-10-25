import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'


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
                        <App1 name={props.city}></App1>
                    </button>
                </div>
            </div>
        </div>
    )
}

function App() {
    const mydata = "react"
    return (
        <div>
            <h1 style={{color:'red',fontSize:'100px'}}>This is main heading</h1>
            hi sai
            <Design name={mydata} city="vijayawada"></Design>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('sai'));

// 1. ReactDOM
// 2. JSX
// 3. empty return statement
// 4. class is a keyword
// 5. 3 types of styling
// 6. props data passing
// 7. coditional rendering