import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
// import Design from './Design'

class App extends React.Component {
    state = {
        mydata: "react"
    }

    render() {
        return(
            <div>
                <input type="text" value={this.state.mydata} onChange={
                    (e)=>{
                        this.setState({
                            mydata: e.target.value
                        })
                    }
                    }></input>
                    <Decide name={this.state.mydata}></Decide>
            </div> 
        )
    }
}

function Decide(props) {
    if(props.name === 'react')
        return <App1></App1>;
    return <div>sai</div>
}

class App1 extends React.Component {
    state = {
        mydata: "react"
    }

    componentDidMount() {
        console.log('created');
    }

    componentWillUnmount() {
        console.log('destroyed');
    }

    render() {
        return (
            <div>
                this is react
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('sai'));

// 1. ReactDOM
// 2. JSX
// 3. empty return statement
// 4. class is a keyword
// 5. 3 types of styling
// 6. props data passing
// 7. coditional rendering


// setState(data) {
    // for in data (key, value)
    // updated each value base on key value pair this.state[key] = value;
    // this.render()
// }