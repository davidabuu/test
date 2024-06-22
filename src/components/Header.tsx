import { CheckOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";

import type { MenuProps } from "antd";
import Navigation from "./Navigation";

const Header = () => {
  const items: MenuProps["items"] = [
    {
      key: "activate",
      label: "All",
      style: { color: "blue", fontWeight: "bold" },
    },
    {
      key: "pending",
      label: "Pending",
      style: { color: "blue", fontWeight: "bold" },
    },
    {
      key: "cleared",
      label: "Cleared",
      style: { color: "blue", fontWeight: "bold" },
    },
  ];

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col md:flex-row font-medium">
          <p className="text-gray-400 md:mb-0 mb-2">Accounts /</p>
          <h3 className="md:ml-2 mb-2 md:mb-0">*4168 &mdash; Sagar Yadav</h3>
        </div>
        <div className="flex items-center">
          <button className="bg-green-700 text-white rounded-full px-2 py-[3px]">
            <CheckOutlined className="pr-2" />
            Open
          </button>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <div className="ml-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </Dropdown>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
