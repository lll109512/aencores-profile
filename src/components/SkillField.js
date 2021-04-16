import React, { useEffect } from 'react'
import { defaultTransition } from 'helper/animationHelper'
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion"
import SeparateText from './animations/SeparateText'

const SkillField = (props) => {
    const {  } = props
    const titleControls = useAnimation()
    useEffect(async () => {
        await titleControls.start('splitTitle')
        await titleControls.start('exitTitle')
    }, [])
    return (
        <motion.div className='h-screen w-screen relative'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                <SeparateText 
                    innerText={'Developer skills'}
                    outerText={'开发技能'}
                    controls={titleControls}
                />
            </div>
        </motion.div>
    )
}

export default SkillField
