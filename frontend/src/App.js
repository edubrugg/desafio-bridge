import React from 'react';

import NavBar from './components/navBar';
import FormInput from './components/formInput';
import TextArea from './components/textArea';

import "rbx/index.css";

 const App = () => {

   return (
     <>
     <div className="container">
      <NavBar />
     </div>
     <div className="container">
       <TextArea />
     </div>
     <div className="container">
      <FormInput />
     </div>
     </>
   );
 };
  
 export default App;
