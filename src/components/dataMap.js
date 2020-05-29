import React,{useState, useEffect} from 'react';
import './styles/styles.scss'


// useEffect(() => {
//   switch(index){
//     case "0202":
//         phoneExt="5962";
//         break;
//     case "3769":
//         phoneExt = "6606";
//         break;
//     case phoneExt="0099":
//         phoneExt = "5691";
//         break;
//     case phoneExt="4169":
//         phoneExt = "6602";
//         break;
// }

//   return () => {
//   }
// }, [index])

const DataButtom=()=> {
  const buttom = ['支付','保險','存貸','籌資','投資管理','市場資訊供應']
  const [index , setindex] = useState('7') 

  console.log('index=>',index)
  const dataMap = buttom.map((item,i)=>{return(
  <div key={item} classname='item' onClick={()=>setindex(i)}>{item}</div>
  )})

  return (
    <div className='bank40'>
      <div className='bank41'>
        <div className='title'>
          <div className={index === 0 ? 'show0':'noshow'}>1</div>
          <div className={index === 1 ? 'show1':'noshow'}>2</div>
          <div className={index === 2 ? 'show2':'noshow'}>3</div>
          <div className={index === 3 ? 'show3':'noshow'}>4</div>
          <div className={index === 4 ? 'show4':'noshow'}>5</div>
          <div className={index === 5 ? 'show5':'noshow'}>6</div>
          <div>Bank4.0</div>
        </div>
        <div className='content'>{dataMap}</div>
      </div>
    </div>
  );
}

export default DataButtom;
