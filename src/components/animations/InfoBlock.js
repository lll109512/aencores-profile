import React from 'react'
import { defaultTransition } from 'helper/animationHelper'
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion"

const titleVariants = {
    initial:{
        opacity:0,
        x:20,
        transition:{
            ...defaultTransition,
        }
    },
    easeIn:{
        opacity:1,
        x:0,
        transition:{
            ...defaultTransition,
            duration:2,
        }
    }
}

// const descVariant =

const InfoBlock = (props) => {
    const { controls, title, children } = props
    return (
        <motion.div initial='initial' transition={{staggerChildren:0.2}} animate={controls} className='p-16 h-full w-full relative'>
            <motion.div variants={titleVariants} className='text-black text-4xl'>
                {title}
            </motion.div>
            {children}
        </motion.div>
    )
}

export default InfoBlock
