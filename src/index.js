import React from 'react';
import ReactDOM from 'react-dom';

var text=" Hi ,This is example using React"
const element=(
    <div>
        <a href="#" className="Link">Dummy Link</a>
        <p><b>{text}</b></p>
    </div>
);
ReactDOM.render(
  element,
  document.getElementById('root')
);

