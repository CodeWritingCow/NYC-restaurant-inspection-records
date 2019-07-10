import React, { Component } from "react";
import Card from './Card';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    const data = this.props.location.state;
    return (
      <div className="container">
        <div className="row">
          <p>Your search returned {data.length} results.</p>
          {data.map((data, i) =>
            <Card key={i}
              dba={data.dba}
              cuisine_description={data.cuisine_description}
              inspection_date={data.inspection_date}
              street={data.street}
              boro={data.boro}
              zipcode={data.zipcode}
              phone={data.phone}
              score={data.score}
              grade={data.grade}
              critical_flag={data.critical_flag}
              action={data.action}
              violation_code={data.violation_code}
              violation_description={data.violation_description}
              grade_date={data.grade_date}
              inspection_type={data.inspection_type}
            />
          )}
        </div>
      </div>
    );
  }
}

export default SearchResults;
