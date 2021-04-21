import React, { useEffect } from 'react'
import { defaultTransition } from 'helper/animationHelper'
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion"
import SeparateText from './animations/SeparateText'
import { useInView } from 'react-intersection-observer';
import { FaDocker, FaCss3, FaReact, FaHtml5, FaApple, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiFramer, SiJavascript, SiBlender, SiAdobephotoshop } from 'react-icons/si';
import { AiFillCiCircle, AiFillAndroid } from 'react-icons/ai';

const SkillField = (props) => {
    const { hashTag } = props
    const titleControls = useAnimation()
    const options = {
        threshold:0.6
      }
    const { ref, inView } = useInView(options);

    useEffect(async () => {
        if(inView){
            await titleControls.start('splitTitle')
            await titleControls.start('exitTitle')
        }else{
            await titleControls.start('initial')
        }
    }, [inView])
    return (
        <motion.div ref={ref} className='h-screen w-screen relative'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                <SeparateText 
                    innerText={'Developer skills'}
                    outerText={'开发技能'}
                    controls={titleControls}
                />
            </div>
            <motion.div className='text-gray-50'>
                <div>
                    test
                </div>
            </motion.div>
        </motion.div>
    )
}

export default SkillField
