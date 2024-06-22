import { useState } from "react";
import OverviewPage from "./Overview/OverviewPage";
import TransactionPage from "./Transactions/TransactionPage";
import CustomerDetailsPage from "./CustomerDetails/CustomerDetailsPage";
// Import other pages/components if available
// import TransactionsPage from "./Transactions/TransactionsPage";
// import CustomerDetailsPage from "./CustomerDetails/CustomerDetailsPage";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Define the components for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewPage />;
      case "transactions":
        
        return <TransactionPage/>;
      case "customerDetails":
       
        return <CustomerDetailsPage/>;
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="mt-8 border-b-2 mx-4 text-gray-400 font-medium flex items-center">
        <p
          className={`cursor-pointer pb-3 ${
            activeTab === "overview" ? "text-black border-b-2 border-black" : ""
          }`}
          onClick={() => handleTabClick("overview")}
        >
          Overview
        </p>

        <p
          className={`ml-3 cursor-pointer pb-3 ${
            activeTab === "transactions"
              ? "text-black border-b-2 border-black"
              : ""
          }`}
          onClick={() => handleTabClick("transactions")}
        >
          Transactions
        </p>
        <p
          className={`ml-3 cursor-pointer pb-3 ${
            activeTab === "customerDetails"
              ? "text-black border-b-2 border-black"
              : ""
          }`}
          onClick={() => handleTabClick("customerDetails")}
        >
          Customer Details
        </p>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default Navigation;
