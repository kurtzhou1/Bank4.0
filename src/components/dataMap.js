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
  const buttom = ['支付','保險','存貸','籌資','投資管理','會員資料']
  const [index , setindex] = useState('7') 

  console.log('index=>',index)
  const dataMap = buttom.map((item,i)=>{return(
  <div key={item} classname='item' onClick={()=>setindex(i)}>{item}</div>
  )})

  return (
    <div className='bank40'>
      <div className='bank41'>
        <div className='title'>
          <div className={index === 0 ? 'show0':'noshow'}>
            <div>支付</div>
            <div>轉帳</div>
            <div>收款</div>
            <div>繳費</div>
            <div>無卡提款</div>
            <div>錢包</div>
          </div>
          <div className={index === 1 ? 'show1':'noshow'}>
            <div>保險</div>
            <div>失竊險</div>
            <div>汽、機車強制險</div>
            <div>旅行平安險</div>
          </div>
          <div className={index === 2 ? 'show2':'noshow'}>
            <div>貸款</div>
            <div>房屋貸款</div>
            <div>個人信貸</div>
          </div>
          <div className={index === 3 ? 'show3':'noshow'}>
            <div>籌資</div>
            <div>股權型群眾募資</div>
            <div>捐獻型群眾募資</div>
          </div>
          <div className={index === 4 ? 'show4':'noshow'}>
            <div>投資</div>
            <div>自己選</div>
            <div>AI智能機器人選股</div>
          </div>
          <div className={index === 5 ? 'show5':'noshow'}>
            <div>會員登入</div>
            <div>帳號</div>
            <input type='text' />
            <div>密碼</div>
            <input type='text' />
            <div>使用指紋或臉部辨識登入</div>
          </div>
          <div>Bank4.0</div>
        </div>
        <div className='content'>{dataMap}</div>
      </div>
    </div>
  );
}

export default DataButtom;
