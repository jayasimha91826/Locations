import Location from './Location';
import './App.css';
import Images from './Images';
import ImageItem from './ImageItem';
import { useState } from 'react';


function App() {
  let [finalArray, setFinalArray]=useState(Images);
  const handleArray=(newArray)=>{
    setFinalArray(newArray)
  }
  return (
    <div className='main_div'>
      <Location onFinalArrayChange={handleArray}/>
      <div className='list_container'>
        {finalArray.map((item)=><ImageItem key={item.id} item={item} finalArray={finalArray} />)}
      </div>
    </div>
  );
}

export default App;
