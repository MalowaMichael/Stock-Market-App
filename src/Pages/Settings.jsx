import { useEffect } from "react"
import { AboutHelp } from "../Components/Settings/AboutHelp"
import { EditProfile } from "../Components/Settings/EditProfile"
import { ManageAccount } from "../Components/Settings/ManageAccount"
import { NewsNotification } from "../Components/Settings/NewsNotifications"
import { NormalView } from "../Components/Settings/NormalView"
import { Privacy } from "../Components/Settings/Privacy"
import { Region } from "../Components/Settings/Region"
import { SecuritySettings } from "../Components/Settings/SecuritySettings"
import { Themes } from "../Components/Settings/Themes"
import {motion} from 'framer-motion'

export const Settings = ({subTabSelected}) =>{

  useEffect(() => {
  }, [])

  return (
    <motion.div 
    initial={{opacity:0, x:-250}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.8, easings:"easeout"}}
    className="border-none border-green-400 w-[94%] m-auto min-h-screen mt-4 ">
      {subTabSelected === "Normal" && <NormalView/>}
      {subTabSelected === "Profile" && <EditProfile/>}
      {subTabSelected === "Account" && <ManageAccount/>}
      {subTabSelected === "Notifications" && <NewsNotification/>}
      {subTabSelected === "Themes" && <Themes/>}
      {subTabSelected === "Region" && <Region/>}
      {subTabSelected === "Privacy" && <Privacy/>}
      {subTabSelected === "Security" && <SecuritySettings/>}
      {subTabSelected === "About" && <AboutHelp/>}

    </motion.div>
  )
}