const PersonDetails = () => {
  return (
    <div className="bg-white border-b-2 text-gray-500 shadow-md p-4 flex flex-col">
      <h2 className="text-xl text-gray-800 p-4 font-bold mb-4">
        Person Details
      </h2>

      <div className="flex flex-col space-y-4">
        <div className="border-t border-gray-200 px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <h3 className="text-lg font-semibold mb-2">Firstname</h3>
          <p className="text-gray-600">Sagar</p>
        </div>

        <div className="border-t border-gray-200 px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <h3 className="text-lg font-semibold mb-2">Middle Name</h3>
          <p className="text-gray-600 italic">None</p>
        </div>

        <div className="border-t border-gray-200 px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <h3 className="text-lg font-semibold mb-2">Last Name</h3>
          <p className="text-gray-600 font-medium">Yadav</p>
        </div>

        <div className="border-t border-gray-200 px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <h3 className="text-lg font-semibold mb-2">Suffix</h3>
          <p className="text-gray-600 italic">None</p>
        </div>

        <div className="border-t border-gray-200 px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <h3 className="text-lg font-semibold mb-2">SSN</h3>
          <p className="text-gray-600">*1703</p>
        </div>

        <div className="border-t border-gray-200 px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <h3 className="text-lg font-semibold mb-2">ID</h3>
          <p className="text-gray-600">psn_11k44k99wv8ahk</p>
        </div>

        <div className="border-t border-gray-200 px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <h3 className="text-lg font-semibold mb-2">Tag</h3>
          <p className="text-gray-600 italic">None</p>
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
