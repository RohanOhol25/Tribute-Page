import React from 'react';
import './Timeline.css';

const Timeline = ({ events }) => {
    return (

    <div>
      <div>       
        <div className="container-fluid timelinediv">
        <div >
          <div className="">
            <ul className="timeline bg-success px-3">
              {events.map((event, index) => (
                <li key={index} className="timeline-item">
                  <div className="timeline-badge bg-danger">
                    <i className="glyphicon glyphicon-check"></i>
                  </div>
                  <div className="timeline-panel bg-warning">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">{event.title}</h4>
                      <p>
                        <small className="text-muted">
                          <i className="glyphicon glyphicon-time"></i> {event.date}
                        </small>
                      </p>
                    </div>
                    <div className="timeline-body">
                      <p>{event.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
        
        </div>
      </div>
    );
  };
  
  export default Timeline;