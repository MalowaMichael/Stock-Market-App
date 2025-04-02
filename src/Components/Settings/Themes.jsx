import {motion} from 'framer-motion'

export const Themes = () =>{
  return (
    <motion.div 
    initial={{opacity:0, x:-250}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.8, easings:"easeout"}}

    className="text-white">
      Switch between light mode and dark mode.

Choose custom themes (if available).

Font size and display preferences.
    </motion.div>
  )
}