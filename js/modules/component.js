import React from 'react';
import ReactDOM from 'react-dom';

!function(){

   // Create FirstComponent class
   class FirstComponent extends React.Component {
      render() {
         return(
            <span className="first-component">First Component</span>
        );
     }
   }

   // Create NewComponent class
   class NewComponent extends React.Component {
      render() {
         return(
            <div className="new-component">
               <p>Hello, world!</p>
               <FirstComponent />
           </div>
        );
     }
   }

   // Render NewComponent
   ReactDOM.render(
     <NewComponent />, document.getElementById('root')
   );

}();
