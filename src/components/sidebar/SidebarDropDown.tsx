import { Dropdown } from "antd";
import { ReactNode } from "react";
import logout_icon from "../../assets/Icons/logout.svg";
import settings_icon from "../../assets/Icons/settings.svg";

interface SidebarDropDownProps {
  children: ReactNode;
  // items: any[];
}

const CurrentWorkspace = () => (
  <div>
    <h1 className="text-base font-bold text-secondary opacity-50 mb-2">
      Current Workspace
    </h1>
    <div className="flex gap-3 items-start">
      <img
        src="https://picsum.photos/200/300?grayscale"
        className="h-16 w-16 object-cover overflow-hidden rounded-md hover:cursor-pointer"
        alt="Profile"
      />
      <div>
        <h1 className="text-secondary text-lg font-bold leading-5">
          Metric Tree Labs
        </h1>
        <h1 className="text-secondary text-base font-medium opacity-50">
          User
        </h1>
        <a
          href="#"
          className="text-secondary hover:text-secondary transition-opacity duration-300 text-sm font-medium inline-flex items-center gap-1 opacity-50 group hover:opacity-100"
        >
          <img
            src={settings_icon}
            className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
          />
          Settings
        </a>
      </div>
    </div>
  </div>
);

const OtherWorkspace = () => (
  <div>
    <h1 className="text-base font-bold text-secondary opacity-50 mb-2">
      Other Workspace
    </h1>
    <a href="#" className="flex gap-3 items-start group">
      <img
        src="https://picsum.photos/200/300?grayscale"
        className="h-16 w-16 object-cover overflow-hidden rounded-md hover:cursor-pointer"
        alt="Profile"
      />
      <div>
        <h1 className="text-secondary text-lg font-bold group-hover:underline leading-5">
          Metric Tree Labs
        </h1>
        <h1 className="text-secondary text-base font-medium opacity-50">
          User
        </h1>
        <a
          href="#"
          className="text-secondary hover:text-secondary transition-opacity duration-300 text-sm font-medium inline-flex items-center gap-1 opacity-50 group hover:opacity-100"
        >
          <img
            src={settings_icon}
            className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
          />
          Settings
        </a>
      </div>
    </a>
  </div>
);

const LogoutWorkspace = () => {
  return (
    <div className="text-red-500 hover:text-red-500 transition-opacity duration-300 text-base font-bold inline-flex items-center gap-1 opacity-50 group hover:cursor-pointer hover:opacity-100">
      <img
        src={logout_icon}
        className="h-5 w-5 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
      />
      Log Out
    </div>
  );
};

const overlayContent = (
  <div className="bg-tertiary p-5 rounded-lg shadow-sm shadow-secondary flex flex-col gap-5">
    <CurrentWorkspace />
    <OtherWorkspace />
    <LogoutWorkspace />
  </div>
);

const SidebarDropDown: React.FC<SidebarDropDownProps> = ({ children }) => (
  <Dropdown
    trigger={["click"]}
    overlayStyle={{ left: "70px", top: "20px", width: "400px" }}
    dropdownRender={() => overlayContent}
  >
    {children}
  </Dropdown>
);

export default SidebarDropDown;
