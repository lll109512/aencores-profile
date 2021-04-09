import React from 'react'
import { motion } from "framer-motion"
import { defaultTransition } from 'helper/animationHelper'

const variants = {
    initial:{
        y:'-100vh'
    },
    exit:{
        y:0
    }
}

const CoverEaseOut = (props) => {
    const {children} = props
    return (
        <motion.div initial={'initial'} exit={'exit'} transition={{staggerChildren: 0.1,...defaultTransition}}>
            <div style={{zIndex:60}}>
                {children}
            </div>
            <motion.div variants={variants} transition={defaultTransition} className='absolute h-screen w-screen bg-gray-700 z-10'/>
            <motion.div variants={variants} transition={defaultTransition} className='absolute h-screen w-screen bg-gray-600 z-20'/>
            <motion.div variants={variants} transition={defaultTransition} className='absolute h-screen w-screen bg-gray-400 z-30'/>
            <motion.div variants={variants} transition={defaultTransition} className='absolute h-screen w-screen bg-gray-200 z-40'/>
            <motion.div variants={variants} transition={defaultTransition} className='absolute h-screen w-screen z-50' style={{backgroundColor:'white'}}/>
        </motion.div>
    )
}

export default CoverEaseOut
