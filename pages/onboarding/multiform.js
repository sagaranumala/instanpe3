import React,{useState} from 'react'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import Page10 from './Page10';
import Page11 from './Page11';
import Page12 from './Page12';
import Page13 from './Page13';
import MyComponent from './MyComponent';
//import Page6 from './page6';
import {motion} from 'framer-motion'
import styles from '../../styles/multipageform.module.css'

const Multiform = () => {
    const [page,setPage]=useState(0);
    const anim = {
        initial: {marginLeft:"100px"},
        open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
        closed: {width: 0} 
    }
    const [cData,setCData]=useState({
        checbox1:"",
        checbox2:"",
        checbox3:"",
        checbox4:"",
        checbox5:"",
        checbox6:"",
        checbox7:"",
        checbox8:"",
        checbox9:"",
        checbox10:"",
        checbox11:"",
        checbox12:"",
        checbox13:"",
    });
    
    //const [progressData,setProgressData]=({});
    const [bar,setBar]=useState(0);
    //console.log(bar);
    let x=45;
    const transition ={type:'spring',duration:3}
    
    //const Pages=["Page1","Page2","Page3","Page4","Page5","Page6","Page7","Page8","Page9","Page10","Page11","Page12","Page13"];
    const Pages=[<Page1 setBar={setBar} cData={cData} setCData={setCData} bar={bar} key={1}/>,
                 <Page2 setBar={setBar} cData={cData} setCData={setCData} bar={bar} key={2}/>,
                 <Page3 setBar={setBar} cData={cData} setCData={setCData} bar={bar} key={3}/>,
                 <Page4 setBar={setBar} cData={cData} setCData={setCData} bar={bar} key={4}/>,
                 <Page5 setBar={setBar} cData={cData} setCData={setCData} bar={bar} key={5}/>,
                 <Page6 setBar={setBar} cData={cData} setCData={setCData} bar={bar} key={6}/>,
                 <Page7 setBar={setBar} cData={cData} setCData={setCData} bar={bar} key={7}/>,
                 <Page8 setBar={setBar} cData={cData} setCData={setCData} bar={bar} key={8}/>,
                 <Page9 setBar={setBar} cData={cData} setCData={setCData} bar={bar} key={9}/>,
                 <Page10 setBar={setBar} cData={cData} setCData={setCData} bar={bar} key={10}/>,
                 <Page11 setBar={setBar} cData={cData} setCData={setCData} bar={bar} key={11}/>,
                 <Page12 setBar={setBar} cData={cData} setCData={setCData} bar={bar} key={12}/>,
                 <Page13 setBar={setBar} cData={cData} setCData={setCData} bar={bar} key={13}/>,]
    const PageDisplay=()=>{
        return Pages[page];
    }
  return (
    <div className={styles.formsContainer}>
        
            <div className={styles.progress}>
            <div style={{height:'19px',width:`${7.69*bar}%`,backgroundColor:'green',borderRadius:'10px'}}>
                 <div  className={styles.progressLinks} style={{height:'19px'}}>
                    {
                        Pages.map(function(ele, i, arrayobj) {
                           return <div onClick={()=>{setPage(i)}} key={i.toString()} style={page===i?{color:"red"}:{color:"blue"}} className={styles.link}>{i+1}</div>
                          })
                    }
                 </div>
            </div>
            </div>
            <motion.div className={styles.box22}
               initial={{opacity:0,x:100}}
               whileInView={{opacity:1,x:0}}
               exit={{opacity:0,x:-100}}
               transition={transition}> 
               {/* <div className={styles.pageContainer}> */}
               
               <div>{PageDisplay()}</div>
            <div className={styles.btndiv}>
               <button className={styles.btnBox} disabled={page===0} onClick={()=> {setPage((page)=> page-1)}}>Back</button>
               <button type='button' className={styles.btnBox} id='Next1' disabled={page===Pages.length-1} onClick={()=> {setPage((page)=> page+1)}}>{page===12?"Submit":"Next"}</button>
            </div>
         </motion.div> 
    </div>
   )
}

export default Multiform
