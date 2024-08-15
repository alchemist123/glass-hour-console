import { NavLink } from "react-router-dom";
import hour_icon from "../../assets/Icons/hour.svg";
import people_icon from "../../assets/Icons/people.svg";
import report_svg from "../../assets/Icons/report.svg";
import task_icon from "../../assets/Icons/task.svg";
import SidebarDropDown from "./SidebarDropDown";

const navItems = [
  { to: "/hours", icon: hour_icon, label: "Hours" },
  { to: "/tasks", icon: task_icon, label: "Tasks" },
  { to: "/people", icon: people_icon, label: "People" },
  { to: "/reports", icon: report_svg, label: "Reports" },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center gap-8 bg-secondary py-5 w-20 shrink-0">
      <div className="flex flex-col justify-center items-center">
        <SidebarDropDown
          children={
            <img
              src="https://picsum.photos/200/300?grayscale"
              className="h-10 w-10 object-cover overflow-hidden rounded-md hover:cursor-pointer"
              alt="Profile"
            />
          }
        />
      </div>
      <p className="w-1/2 h-[1px] bg-white opacity-30"></p>
      {navItems.map(({ to, icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `group flex flex-col hover:opacity-100 transition-opacity duration-500 justify-center items-center hover:cursor-pointer ${
              isActive ? "opacity-100" : "opacity-30"
            }`
          }
        >
          <img
            src={icon}
            className="w-8 h-8 group-hover:opacity-100 transition-opacity duration-300"
            alt={label}
          />
          <p className="text-tertiary font-medium mt-2 text-sm">{label}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
