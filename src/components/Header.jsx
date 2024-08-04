import { BiSearch } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi2";
import { IoMailOutline } from "react-icons/io5";
import { RiSettings4Line } from "react-icons/ri";

function Header() {
  return (
    <header className="header flex justify-between items-center p-4 bg-[--compsBg] relative z-10 shadow-md">
      <label
        htmlFor={inputText}
        className="searchCont w-full max-w-72 rounded flex gap-2 items-center h-8 px-2 bg-[--inputBg] outline outline-[--iconsBg] outline-2 focus-within:outline-[--themeColor]"
      >
        <BiSearch className="text-xl pointer-events-none" />
        <input
          id={inputText}
          placeholder={inputText}
          type="text"
          className="w-full bg-transparent placeholder:capitalize outline-none"
        />
      </label>
      <div className="iconCont flex gap-3">
        {navButtons.map(({ id, Icon, SubIcon, title, className }) => (
          <Icon
            key={id}
            title={title}
            className={className ?? iconClass(title)}
            src={className && "../src/assets/user.jpg"}
            alt={className && "user"}
            style={{ cursor: "pointer" }}
          >
            {SubIcon && <SubIcon className="text-2xl" />}
          </Icon>
        ))}
      </div>
    </header>
  );
}

export default Header;

const iconWHNum = "10",
  iconWH = `w-${iconWHNum} h-${iconWHNum}`,
  inputText = "search",
  iconClass = (title) =>
    title === "Notifications"
      ? "relative before:absolute before:right-0 before:top-0 before:m-2 before:p-[6px] before:bg-[--themeColor] before:rounded-full rounded-full bg-[--iconsBg] p-2 w-10 h-10"
      : `rounded-full bg-[--iconsBg] p-2 w-10 h-10`,
  navButtons = [
    {
      id: 1,
      Icon: IoMailOutline,
      title: "Inbox",
    },
    {
      id: 2,
      Icon: RiSettings4Line,
      title: "Settings",
    },
    {
      id: 3,
      Icon: "span",
      SubIcon: HiOutlineBell,
      title: "Notifications",
    },
    {
      id: 4,
      Icon: "img",
      className: `rounded-full ${iconWH} ml-3`,
      title: "Profile",
    },
  ];
