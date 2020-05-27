import React from 'react';

const dataButtom=()=> {
  const buttom = ['支付','保險','存貸','籌資','投資管理','市場資訊供應']

  const dataMap = buttom.map(item=>{return(
  <div key={item}>{item}</div>
  )})

  return (
    <div>
     {dataMap}
    </div>
  );
}

export default dataButtom;
