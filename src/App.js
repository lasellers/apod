import React from 'react';
import './App.css';

class ApodDetail extends React.Component {
    render() {
        const {copyright, date, explanation, hdurl, media_type, service_version, title, url} = this.props.state;

        let apodStyle = {
            backgroundImage: `url(${hdurl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%"
        }

        /*- div className="apod"><img src={url} alt={title}/></div */
        return (
            <div className="App-body" style={apodStyle}>

                <p>{title}</p>

                <p><b>Copyright</b>: {copyright}</p>

                <p><b>Date</b>: {date}</p>

                <p><b>Explanation</b>: {explanation}</p>

                <p><b>Media Type</b>: {media_type}</p>

                <p><b>Service Version</b>: {service_version}</p>
                <p><b>url</b>: {url}</p>
                <p><b>hd url</b>: {hdurl}</p>

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
                        <ApodDetail state={this.state}/>
                    </header>
                </div>
            </>
        );
    }

}

export default App;
