import {motion} from 'framer-motion'

export const Privacy = () =>{
  return (
    <motion.div 
    initial={{opacity:0, x:-250}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.8, easings:"easeout"}}
    className="text-white">
      <div>Who can view my profile, posts etc</div>
      <div>Data privacy sharing preferences</div>
    </motion.div>
  )
}