import React from 'react'
import styles from '../../styles/multipageform.module.css'

const Page3 = ({cData,setCData,bar,setBar}) => {
  const handleChecbox=(e)=>{
      if(e.target.checked){
         setBar((bar)=>bar+1)
      }else{
        if(bar!=0){
          setBar((bar)=>bar-1)
      }
    }
  }
  return (
    <div className={styles.container}>
              <form id='form1' className={styles.form1}>
                 <div className={styles.heading}><h2 className={styles.headmp}><input 
                 checked={cData?.checkbox3}
                 onChange={(e)=>{setCData({...cData,checkbox3:e.target.checked?true:false})}} 
                 onClick={handleChecbox} className={styles.checkbox1} type="checkbox"/>Interbank Settlement*</h2></div>
                 <div className={styles.inputbox1}>
                     <div className={styles.preInput}>USD$</div>
                     <div><input type='text'  className={styles.inputpage3} placeholder='Amount' required/></div>
                 </div>
                 <input type='text' className={styles.inputm} placeholder='Settelement Date' required/>
                 
              </form>   
    </div>
  )
}

export default Page3