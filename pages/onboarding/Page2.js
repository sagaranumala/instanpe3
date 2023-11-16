import React from 'react'
import styles from '../../styles/multipageform.module.css'

const Page2 = ({cData,setCData,bar,setBar}) => {
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
                 <div className={styles.heading}><h2 className={styles.headmp}>
                <input 
                 checked={cData?.checkbox2}
                 onChange={(e)=>{setCData({...cData,checkbox2:e.target.checked?true:false})}} 
                 onClick={handleChecbox} 
                 className={styles.checkbox1}
                  type="checkbox"
                  />Payment Type Information*</h2></div>
                 <input type='text' className={styles.inputm} placeholder='Category Purpose / Prorietary' required/>
                 
              </form>   
    </div>
  )
}

export default Page2
