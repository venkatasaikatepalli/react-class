import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import Design from './Design'


class App extends React.Component {
    state = {
        mydata: "react",
        message: "reactdsd"
    }

    render() {
        return (
            <div>
                <h1 style={{color:'red',fontSize:'100px'}}>This is main heading</h1>
                <input type="text" value={this.state.mydata} onChange={
                    (e)=>{
                        this.setState({
                            mydata: e.target.value,
                            message: e.target.value
                        })
                    }
                    }></input>
                    {this.state.message}
                <Design name={this.state.mydata} city="vijayawada"></Design>
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