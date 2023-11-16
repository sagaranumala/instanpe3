import React from 'react'
import styles from '../../styles/multipageform.module.css'

const Page11 = ({cData,setCData,bar,setBar}) => {
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
    <div className={styles.container5}>
              <form id='form1' className={styles.form1}>
                 <div className={styles.heading}><h2 className={styles.headmp}><input 
                 checked={cData?.checkbox11}
                 onChange={(e)=>{setCData({...cData,checkbox11:e.target.checked?true:false})}} 
                 onClick={handleChecbox} className={styles.checkbox1} type="checkbox"/>Creditor Account*</h2></div>
                 <input type='text' className={styles.inputm} placeholder='Name*' required/>
                 <input type='text' className={styles.inputm} placeholder='Account Number*' required/>
                 <input type='text' className={styles.inputm} placeholder='City*' required/>
                 <input type='text' className={styles.inputm} placeholder='Account Type Name*' required/>
              </form>   
    </div>

  )
}

export default Page11