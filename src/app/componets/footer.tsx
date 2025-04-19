import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from"next/link";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-6 flex justify-center  gap-4">
         <Link href={"https://github.com/Alyan130"}><FaGithub className="text-3xl"/></Link>
         <Link href={"https://www.linkedin.com/in/alyan-ali-560910268/"}><FaLinkedin className="text-3xl"/></Link> 
        <p className=" text-[#ADB7BE]">
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;