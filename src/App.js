import React, { useState } from 'react';

import NavBar from './components/navBar';
import FormInput from './components/formInput';
import TextArea from './components/textArea';

import "./components/form.css"
import "rbx/index.css";

 const App = () => {
   const [data, setData] = useState();

   return (
     <>
     <div className="container">
      <NavBar />
     </div>
     <div className="container">
       <TextArea />
     </div>
     <div className="container">
      <FormInput className="form-input"/>
     </div>
     </>
   );
 };
  
 export default App;
