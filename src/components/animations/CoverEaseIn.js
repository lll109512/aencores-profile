import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { defaultTransition } from 'helper/animationHelper'

const variants = {
    out:{
        y:0,
    },
    in:{
        y:'-100vh',
        transitionEnd:{
            display:'none',
        }
    }
}

const CoverEaseIn = (props) => {
    const {children} = props
    return (
        <motion.div className='fixed' animate={'in'} transition={{staggerChildren: 0.1,...defaultTransition}}>
            <div style={{zIndex:60}}>
                {children}
            </div>
            <motion.div variants={variants} transition={defaultTransition} className='absolute h-screen w-screen z-50' style={{backgroundColor:'white'}}/>
            <motion.div variants={variants} transition={defaultTransition} className='absolute h-screen w-screen bg-gray-200 z-40'/>
            <motion.div variants={variants} transition={defaultTransition} className='absolute h-screen w-screen bg-grayBlueDeep z-30'/>
            <motion.div variants={variants} transition={defaultTransition} className='absolute h-screen w-screen bg-deepGray z-20'/>
            <motion.div variants={variants} transition={defaultTransition} className='absolute h-screen w-screen bg-gray-800 z-10'/>
        </motion.div>
    )
}

export default CoverEaseIn
