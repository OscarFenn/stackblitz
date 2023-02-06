import React from 'react';

const Member = ({name, description, fruit}) => {
  return (
<>
<div className="col-12 col-sm-4">
<div className="card">
<div className="card-body">
<h5 className="card-title">{name}</h5>
<p className="card-text"><b>Description</b>: {description}</p>
<p className="card-text"><b>Favorite Fruit</b>: {fruit}</p>
</div>
</div>
</div>
</>
  );
};

export default Member;