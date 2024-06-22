const AccountInfo = () => {
  return (
    <div className="bg-white text-gray-500 shadow-md rounded-md">
      <h2 className="text-xl text-gray-800 p-4 font-bold mb-4">Account Info</h2>

      <div className="border-t border-gray-200 px-4 py-3 flex flex-col lg:flex-row items-center justify-between">
        <h3 className="text-lg font-semibold mb-2 lg:mb-0">Account ID</h3>
        <p className="text-gray-600 mb-2 lg:mb-0">psn_11k44k99wv8ahk</p>
      </div>

      <div className="border-t border-gray-200 px-4 py-3 flex flex-col lg:flex-row items-center justify-between">
        <h3 className="text-lg font-semibold mb-2 lg:mb-0">Status</h3>
        <p className="text-gray-600 mb-2 lg:mb-0">Open</p>
      </div>

      <div className="border-t border-gray-200 px-4 py-3 flex flex-col lg:flex-row items-center justify-between">
        <h3 className="text-lg font-semibold mb-2 lg:mb-0">Account Product</h3>
        <p className="text-blue-600 mb-2 font-medium lg:mb-0">
          Personal Checking
        </p>
      </div>

      <div className="border-t border-gray-200 px-4 py-3 flex flex-col lg:flex-row items-center justify-between">
        <h3 className="text-lg font-semibold mb-2 lg:mb-0">
          Account Structure
        </h3>
        <p className="text-gray-600 mb-2 lg:mb-0">Ledger</p>
      </div>

      <div className="border-t border-gray-200 px-4 py-3 flex flex-col lg:flex-row items-center justify-between">
        <h3 className="text-lg font-semibold mb-2 lg:mb-0">
          Account Ownership
        </h3>
        <div className="flex bg-primary  px-1 py-1 border rounded-full">
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
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <p className="text-gray-600  inline-block px-2  border rounded-full  font-medium  border-primary ">
            Personal
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-3 flex flex-col lg:flex-row items-center justify-between">
        <h3 className="text-lg font-semibold mb-2 lg:mb-0">Account Type</h3>
        <p className="text-gray-600 mb-2 lg:mb-0">Checking</p>
      </div>

      <div className="border-t border-gray-200 px-4 py-3 flex flex-col lg:flex-row items-center justify-between">
        <h3 className="text-lg font-semibold mb-2 lg:mb-0">Tag</h3>
        <p className="text-gray-600 mb-2 italic lg:mb-0">None</p>
      </div>

      <div className="border-t border-gray-200 px-4 py-3 flex flex-col lg:flex-row items-center justify-between">
        <h3 className="text-lg font-semibold mb-2 lg:mb-0">Created</h3>
        <p className="text-gray-600 font-bold mb-2 lg:mb-0">
          05/13/2024, 01:26 PM
        </p>
      </div>
    </div>
  );
};

export default AccountInfo;
