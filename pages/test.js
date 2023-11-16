import React from 'react'
import {motion} from 'framer-motion'

const test = () => {
    const transition ={type:'spring',duration:3}
  return (
    <motion.div className='test'
             initial={{right:'-1rem'}}
             whileInView={{right:'4rem'}}
             transition={transition}
             >
    </motion.div>
  )
}

export default test
