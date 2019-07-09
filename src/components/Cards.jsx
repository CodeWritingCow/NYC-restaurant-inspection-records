import React from "react";
import Card from './Card';

function Cards(props) {
  return (
    <div>
      {props.data.map((data, i) =>
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
  );
}

export default Cards;
