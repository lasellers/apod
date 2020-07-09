import React from 'react';
import './ApodDetail.css';

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

export default ApodDetail;
