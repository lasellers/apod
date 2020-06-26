import React from 'react';
import './App.css';

const API_KEY = 'HAzNETw6VUoq4BIZ0KikSObCBP0xe0gMSbbYaubP';

/*let [state, setState] = useState(false, {});

useEffect((props) => {
  console.log(props);
});
*/

function ApodDetail({copyright, date, explanation, hdurl, media_type, service_version, title, url}) {
console.log(copyright);
  return (
    <>
      <h2>Copyright</h2>
      <p>${copyright}</p>
      <h2>date</h2>
      <p>${date}</p>
      <h2>explanation</h2>
      <p>${explanation}</p>
      <h2>hdurl</h2>
      <p>${hdurl}</p>
      <h2>media_type</h2>
      <p>${media_type}</p>
      <h2>service_version</h2>
      <p>${service_version}</p>
      <h2>title</h2>
      <p>${title}</p>
      <h2>url</h2>
      <p>${url}</p>
      <img src='{url}' alt='{title}'></img>
    </>
  );
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {}
        };
  }

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result', result);
          this.setState({isLoaded:true, data:result});
        },
        (error) => {
          this.setState({isLoaded:true, data:error});
        }
      )
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>APOD</h1>
        {this.state}
        {this.state.isLoaded}
        <br></br>
                {this.state.data}
        <br></br>
        
          <ApodDetail state={this.state.data}></ApodDetail>

        </header>
      </div>
    );
  }

};




export default App;
