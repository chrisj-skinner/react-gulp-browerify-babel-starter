import React from 'react';
import ReactDOM from 'react-dom';

!function(){

   // Create FirstComponent class
   class FirstComponent extends React.Component {
      render() {
         return(
            <div>
               <p className="body">
                  { this.props.body } by <i className="author">
                     { this.props.author }
                  </i>
               </p>
            </div>
        );
     }
   }

   // Create NewComponent class
   class NewComponent extends React.Component {
      render() {
         return(
            <div className="new-component">
               <p>Hello, world!</p>
               <FirstComponent
               author="J Adams" body="The Wild"
               />
               <FirstComponent
               author="S Tate" body="Energy Hat"
               />
           </div>
        );
     }
   }

   // Render NewComponent
   ReactDOM.render(
     <NewComponent />, document.getElementById('root')
   );

}();
