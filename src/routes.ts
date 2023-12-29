import { BiHomeAlt2 } from "react-icons/bi";
import { FaCode } from "react-icons/fa";

import { PiChatCircleBold } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";


export const routes = [
  {
    title: "Home",
    href: "/",
    Icon: BiHomeAlt2,
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    Icon: FaCode,
  },
  {
    title: "Technologies & Skills",
    href: "/skills",
    Icon: IoLogoJavascript,
  },
  {
    title: "Contact me",
    href: "/contact",
    Icon: PiChatCircleBold,
  },
];
