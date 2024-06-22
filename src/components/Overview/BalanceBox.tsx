const BalanceBox = () => {
  return (
    <div className="bg-white p-4 border  rounded-r-md font-medium  rounded-br-md shadow-md flex flex-col r h-40 w-full">
      <p className="text-gray-400 text-[16px] ">Current Balance</p>
      <p className="text-gray-700 text-xl font-bold  ">$4,900.00</p>
      <p className="text-gray-400 mt-3 text-[16px] ">Available Balance</p>
      <p className="text-gray-700 text-xl font-bold ">$4,900.00</p>
    </div>
  );
};

export default BalanceBox;
