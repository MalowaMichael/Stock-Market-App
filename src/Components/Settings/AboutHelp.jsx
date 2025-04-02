import {motion} from 'framer-motion'

export const AboutHelp = () =>{
  return (
    <motion.div
    initial={{opacity:0, x:-250}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.8, easings:"easeout"}}
     className="text-white">
      Version information.

Terms and conditions.

Privacy policy.

Contact support or report an issue.
    </motion.div>
  )
}