import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { IoLogoJavascript} from "react-icons/io5";
import { SiPython, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";

export default function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
        <RiNextjsFill size={40}/>
         <FaReact color="cyan" size={46}/>
        <SiTypescript color="sky" size={40}/>
        <IoLogoJavascript color="yellow" size={40}/>
      </OrbitingCircles>
      <OrbitingCircles iconSize={34} radius={100} reverse speed={2}>
        <SiMongodb size={40} color="green"/>
        <SiMysql size={48} color="white"/>
        <SiPython size={40} color="yellow"/>
      </OrbitingCircles>
    </div>
  );
  }


