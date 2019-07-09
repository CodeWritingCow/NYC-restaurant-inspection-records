import React from 'react';

function Card(props) {
  const boldStyle = {fontWeight: 'bold'};
  return (
    <div style={{ marginTop: '50px' }}>
      <div className="row">
        <div className="card hoverable">
          <div className="card-content">
            <span className="card-title">{props.dba}</span>
            <div className="divider"></div>
            <ul style={{listStyleType: 'none'}}>
              <li>
                <span style={boldStyle}>Cuisine: </span>
                  {props.cuisine_description}
              </li>
              <li>
                <span style={boldStyle}>Inspection Date: </span>
                {props.inspection_date}
              </li>
              <li>
                <span style={boldStyle}>Address: </span>
                {props.street}, {props.boro} {props.zipcode}
              </li>
              <li>
                <span style={boldStyle}>Phone: </span>
                {props.phone}
              </li>
              <li>
                <span style={boldStyle}>Score: </span>
                {props.score}
              </li>
              <li>
                <span style={boldStyle}>Grade: </span>
                {props.grade}
              </li>
              <li>
                <span style={boldStyle}>Critical Flag: </span>
                {props.critical_flag}
              </li>
              <li>
                <span style={boldStyle}>Action: </span>
                {props.action}
              </li>
              <li>
                <span style={boldStyle}>Violation Code: </span>
                {props.violation_code}
              </li>
              <li>
                <span style={boldStyle}>Violation Description: </span>
                {props.violation_description}
              </li>
              <li>
                <span style={boldStyle}>Grade Date: </span>
                {props.grade_date}
              </li>
              <li>
                <span style={boldStyle}>Inspection Type: </span>
                {props.inspection_type}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
