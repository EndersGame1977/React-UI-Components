import React from 'react';
import './App.css';
import Boxy from './components/BoxComponents/Boxy';

import { data } from './data';

const App = () => {
  console.log(data);
  return (
    <div className='wrapper'>
      {data.map((box) => { return <Boxy box={box} /> })};
    </div>
  );
};

export default App;

{/* <div className='four'></div>
<div className='three'></div>
<div className='one'></div>
<div className='one'></div>
<div className='one'></div>
<div className='one'></div>
<div className='one'></div>
<div className='one'></div>
<div className='one'></div>
<div className='one'></div>
<div className='one'></div>
<div className='one'></div>
<div className='one'></div>
<div className='one'></div>
<div className='one'></div>
<div className='three'></div>
<div className='one'></div> */}