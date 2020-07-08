import React from 'react';
import './App.css';

class ApodDetail extends React.Component {
    render() {
        const {copyright, date, explanation, hdurl, media_type, service_version, title, url} = this.props.state;

        return (
            <div>
                <div className="apod-text-overlay">
                    <p>{title}</p>
                    <p><b>Copyright</b>: {copyright}</p>
                    <p><b>Date</b>: {date}</p>
                    <p><b>Explanation</b>: {explanation}</p>
                    <p><b>Media Type</b>: {media_type}</p>
                    <p><b>Service Version</b>: {service_version}</p>
                    <p><b>Url</b>: {url}</p>
                    <p><b>HD Url</b>: {hdurl}</p>
                </div>

                <div className="apod"><img src={hdurl} alt={title}/></div>

            </div>
        );
    }
}

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
