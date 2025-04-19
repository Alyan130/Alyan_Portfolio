import React from "react";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
  const underlineWidth = active ? "calc(100% - 0.75rem)" : "0";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <div
        className="h-1 bg-primary-500 mt-1 mr-3"
        style={{ width: underlineWidth }}
      ></div>
    </button>
  );
};

export default TabButton;
