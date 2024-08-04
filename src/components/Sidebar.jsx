import { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { BsBagCheck } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { HiMiniHome } from "react-icons/hi2";
import { LuClipboardCheck } from "react-icons/lu";
import { MdInsertChartOutlined } from "react-icons/md";

function Sidebar() {
  const [curId, setCurId] = useState(1),
    activeBefore =
      "!text-[--themeColor] before:border-[--themeColor] before:border-2";
  return (
    <nav className="sidebar w-24 bg-[--compsBg] flex flex-col gap-8 text-center py-4 relative z-20">
      {sideBarIcons.map(({ nonActive, id, icon, title }, i) => (
        <span
          key={i}
          title={title}
          className={`text-2xl cursor-pointer w-full flex justify-center items-center p-1 relative last-of-type:mt-auto ${
            !nonActive && curId === id ? activeBefore : ""
          } ${
            !nonActive
              ? "before:rounded-lg before:absolute before:left-0 before:h-full hover:before:border-slate-600 hover:before:border-2"
              : ""
          }`}
          onClick={() => (nonActive ? "" : setCurId(id))}
        >
          {icon}
        </span>
      ))}
    </nav>
  );
}

const sideBarIcons = [
  {
    icon: <img src="assets/logo.png" className="w-8" alt="" />,
    title: "Home",
    nonActive: true,
  },
  {
    id: 1,
    icon: <HiMiniHome />,
    title: "Home",
  },
  {
    id: 2,
    icon: <MdInsertChartOutlined />,
    title: "Analytics",
  },
  {
    id: 3,
    icon: <LuClipboardCheck />,
    title: "Checklist",
  },
  {
    id: 4,
    icon: <CiWallet />,
    title: "Wallet",
  },
  {
    id: 5,
    icon: <BsBagCheck />,
    title: "Shopping",
  },
  {
    icon: <BiLogOutCircle className="-scale-100 hover:text-[--themeColor]" />,
    title: "Logout",
    nonActive: true,
  },
];

export default Sidebar;
