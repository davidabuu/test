import ContactInformation from "./ContactInformation";
import PersonDetails from "./PersonDetails";

const CustomerDetailSummary = () => {
  return (
    <div className="  bg-white rounded-t-md  py-6">
      <div className="border-b px-4 py-5">
        <h1 className="font-bold">Sagar Yadav</h1>
        <p className="text-gray-600">psn_11k44k99wv8ahk</p>
        <div className="flex mt-3 w-max bg-primary items-center px-2 py-1 border rounded-full text-sm font-medium text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#4b5563"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <p className="font-bold text-gray-600">Primary Person</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <PersonDetails />
        </div>
        <div className="md:w-1/2">
          <ContactInformation />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailSummary;
