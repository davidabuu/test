import { Button } from "antd";
import { CaretDownOutlined, DownloadOutlined } from "@ant-design/icons";
import TransactionTable from "./TransactionTable";

const TransactionPage = () => {
  return (
    <div className="pt-4">
      <div className="flex items-center justify-between px-4 mb-4">
        <div className="flex items-center justify-center relative">
          <img
            src="./filter.png"
            alt="Filter"
            className="w-5 h-5 mr-2"
          />

          <div className="relative inline-block">
            <select className="bg-primary w-[150px] border-2 border-gray-200 px-2 py-1 rounded-md outline-none cursor-pointer appearance-none pr-8">
              <option value="date">All Types</option>
              <option value="amount">Amount</option>
              <option value="type">Type</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <CaretDownOutlined style={{ color: "#333" }} />
            </div>
          </div>
        </div>

        <Button
        
          className="flex font-medium bg-white items-center"
          icon={<DownloadOutlined />}
        >
          Export View
        </Button>
      </div>

      <div>
        <TransactionTable />
      </div>
    </div>
  );
};

export default TransactionPage;
