import React from 'react';
import ReactDOM from 'react-dom/client';

//ReactElement syntax
const heading = React.createElement(    
"h",
{id: "heading"},
"Namaste React"
);
// OR 

//using jsx syntax
//created heading in React using jsx syntax
const jsxheading = <h1 id="heading">Namaste React using JSX</h1>;

//React Function Component - returns jsx element
 const HeadingComponent = () => {
    return (
        <div id='container'>
              <h1 className="heading">Namaste React using Function Component-Test</h1>
        </div>
    );
}

