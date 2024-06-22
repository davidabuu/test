const ContactInformation = () => {
  return (
    <div className="bg-white border-b-2 text-gray-500 shadow-md p-4 flex flex-col h-full">
      <h2 className="text-xl text-gray-800 p-4 font-bold mb-4">
        Contact Information
      </h2>

      <div className="flex-grow flex flex-col">
        <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold mb-2">Email Address</h3>
          <p className="text-gray-600 font-bold">sagar@orura.io</p>
        </div>

        <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
          <p className="text-gray-600 font-bold">+1 925-555-5555</p>
        </div>

        <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold mb-2">Physical Address</h3>
          <p className="text-gray-600 font-medium">
            215 Keany St San Francisco, CA, 94120
          </p>
        </div>

        <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold mb-2">Mailing Address</h3>
          <p className="text-gray-600 italic">Same Address</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
