import React from "react";
import Box from "./Box";

import TransactionTable from "../TransactionTable";
import CustomerSummary from "./CustomerSummary";
import AccountInfo from "./AccountInfo";
import InfoBoxes from "./InfoBoxes";

const OverviewPage: React.FC = () => {
  return (
    <div className="pt-2  bg-primary">
      <InfoBoxes />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-0 p-4">
        <Box
          title="Primary Person"
          info="Sagar Yadav"
          color="text-gray-400"
          borderRadius1="md:rounded-bl-md"
          borderRadius2="md:rounded-tl-md"
        />
        <Box
          title="Authorized Users"
          info="1"
          color="text-blue-400"
        />
        <Box
          title="Account ID"
          info="acct_11k44k99wvaj3"
          color="text-gray-400"
        />
        <Box
          title="Created"
          info="05/13/2024, 01:26 PM"
          color="text-gray-400"
          borderRadius1="md:rounded-br-md"
          borderRadius2="md:rounded-tr-md"
        />
      </div>
      <div className="p-4">
        <TransactionTable />
      </div>
      <div className="p-4">
        <CustomerSummary />
      </div>
      <div className="p-4">
        <AccountInfo />
      </div>
    </div>
  );
};

export default OverviewPage;
