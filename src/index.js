import React from 'react';
import ReactDOM from 'react-dom';
import dataButtom from './components/dataMap';


const Bank = () => {



  return(
  <div className='bank40'>{dataButtom}</div>
  )
}


ReactDOM.render(
    <Bank />,
  document.getElementById('root')
);