import React from 'react';
import ReactDOM from 'react-dom';


const Bank = () => {

  const buttom = ['支付','保險','存貸','籌資','投資管理','市場資訊供應']

  const dataMap = buttom.map(item=>console.log(item))

  return(
  <div className='bank40'>{buttom}</div>
  )
}


ReactDOM.render(
    <Bank />,
  document.getElementById('root')
);