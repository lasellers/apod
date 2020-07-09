import React from 'react';
import './App.css';
import ApodDetail from "./Components/ApodDetail";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env["REACT_APP_API_KEY"]}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(result);
                },
                (error) => {
                    this.setState(error);
                }
            )
    };

    render() {
        return (
            <>
                <div className="App">
                    <header className="App-header">
                        <h1>Astronomy Photo of the Day</h1>
                    </header>
                    <div className="App-body">
                        <ApodDetail state={this.state}/>
                    </div>
                </div>
            </>
        );
    }

}

export default App;
