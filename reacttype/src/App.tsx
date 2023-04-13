import React from 'react';
import './App.css';
import Home from './components/Home';
import Instructor from './components/Instructor';
import InstructorList from './components/InstructorList';

function App() {

  const instructor = {
    firstName: 'Ehlullah',
    lastName: 'Karakurt'
  }

  const instructorList = [{
    firstName: 'Ehlullah',
    lastName: 'Karakurt'
  },
  {
    firstName: 'Canan',
    lastName: 'Boz'
  },
  {
    firstName: 'Efe',
    lastName: 'Kara'
  }];
  return (
    <div className="App">
      <Home name="Ehlullah" courseNumber={15} isBest />
      <Instructor instructorNameLastName={instructor} />
      <InstructorList instructorNameLastNameList= {instructorList}/>
    </div>
  );
}

export default App;
