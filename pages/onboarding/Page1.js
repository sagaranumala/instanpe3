import React from 'react'
import styles from '../../styles/multipageform.module.css'

const Page1 = ({cData,setCData,bar,setBar}) => {
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
                 <div className={styles.heading}><h2 className={styles.headmp}><input onClick={handleChecbox} 
                  checked={cData?.checkbox1}
                  onChange={(e)=>{setCData({...cData,checkbox1:e.target.checked?true:false})}} 
                  className={styles.checkbox1}
                  type="checkbox"/>Payment Identification*</h2></div>
                 <input type='text' className={styles.inputm} placeholder='End To End Identification*' required/>
                 <input type='text' className={styles.inputm} placeholder='UETR*' required/>
              </form>   
     </div>
  )
}

export default Page1

