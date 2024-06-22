import React from "react";

interface BoxProps {
  title: string;
  info: string;
  color: string;
  borderRadius1?: string;
  borderRadius2?: string;
}

const Box: React.FC<BoxProps> = ({
  title,
  info,
  color,
  borderRadius1 = '',
  borderRadius2 = '',
}) => {
  return (
    <div
      className={`bg-white p-4 border ${borderRadius1} ${borderRadius2} font-medium shadow-md flex flex-col h-22 w-full`}
    >
      <p className="text-gray-400 text-[16px]">{title}</p>
      <p className={`text-gray-700 ${color} text-lg font-bold`}>{info}</p>
    </div>
  );
};

export default Box;
