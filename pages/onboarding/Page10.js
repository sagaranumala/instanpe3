import React from 'react'
import styles from '../../styles/multipageform.module.css'

const Page10 = ({cData,setCData,bar,setBar}) => {
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
                 checked={cData?.checkbox10}
                 onChange={(e)=>{setCData({...cData,checkbox10:e.target.checked?true:false})}} 
                 onClick={handleChecbox} className={styles.checkbox1} type="checkbox"/>Debtor Account</h2></div>
                 <select className={styles.inputm} placeholder='Identification Type'>
                      <option value="someOption">IBAN</option>
                      <option value="otherOption">Other</option>
                 </select>
                 <input type='text' className={styles.inputm} placeholder='Account Number*' required/>
                 <select className={styles.inputm} placeholder='Account Type'>
                      <option value="someOption">Current account</option>
                      <option value="otherOption">Charges Account</option>
                      <option value="otherOption">Money Market Account</option>
                      <option value="otherOption">Settlement Account</option>
                      <option value="otherOption">Savings Account</option>
                 </select>
                 <input type='text' className={styles.inputm} placeholder='Account Type Name*' required/>
              </form>   
    </div>

  )
}

export default Page10