import React from 'react';
import Note from './Note';

const Home = (props) => {
  // const {showAlert} = props;
  return (
    <div>
            <Note showAlert={props.showAlert}/>
    </div>
  )
}

export default Home
