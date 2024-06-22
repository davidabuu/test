import { useState } from "react";
import { Pagination } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

interface Transaction {
  summary: JSX.Element | string;
  paymentId: JSX.Element | string;
  type: string;
  amount: string;
  balance: string;
  date: string;
  balanceIcon: JSX.Element;
}

const TransactionTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 5; 
  const transactions: Transaction[] = [
    {
      summary: (
        <div>
          <p className="text-gray-700 font-bold text-sm">
            Transfer from 123344444 to 222234444
          </p>
          <p className="text-gray-400 text-sm">tx_122345543</p>
        </div>
      ),
      paymentId: <p className="text-blue-400 text-sm">book_11k44mwewvb8w7</p>,
      type: "Withdrawal",
      amount: "-$500.00",
      balance: "$4,400.00",
      date: "05/13/2024, 01:26 PM",
      balanceIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="red"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
          />
        </svg>
      ),
    },
    {
      summary: (
        <div>
          <p className="text-gray-700 font-bold text-sm">Initial Funding</p>
          <p className="text-gray-400 text-sm">tx_11k449wv8anv</p>
        </div>
      ),
      paymentId: <p className="text-blue-400 text-sm"></p>,
      type: "Deposit",
      amount: "$150.00",
      balance: "$4,550.00",
      date: "05/13/2024, 01:26 PM",
      balanceIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="green"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      ),
    },
    // Add more transaction objects as needed
  ];

  // Calculate the index range based on currentPage and pageSize
  const startIndex: number = (currentPage - 1) * pageSize;
  const endIndex: number = startIndex + pageSize;

  // Slice transactions array to display only items for the current page
  const currentTransactions: Transaction[] = transactions.slice(
    startIndex,
    endIndex
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="pt-4">
      <div className="bg-white shadow-md rounded-md">
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap text-sm text-left text-gray-400">
            <thead>
              <tr className="border-b border-t">
                <th className="px-4 py-3">Summary</th>
                <th className="px-4 py-3">Payment ID</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Balance</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {currentTransactions.map((transaction, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-4">{transaction.summary}</td>
                  <td className="px-4 py-4">{transaction.paymentId}</td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-3 py-1 border rounded-full text-sm font-medium text-gray-600 border-primary">
                      {transaction.type}
                    </span>
                  </td>
                  <td className="px-4 text-gray-600 font-medium py-4">
                    {transaction.amount}
                  </td>
                  <td className="px-4 py-4">
                    <span className="flex items-center">
                      <span className="mr-1">{transaction.balance}</span>
                      {transaction.balanceIcon}
                    </span>
                  </td>
                  <td className="px-4 text-gray-600 font-bold py-4">
                    {transaction.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

       
        <div className="flex items-center justify-end px-4 py-4">
          <div className="text-sm">Row per page: {pageSize}</div>
          <div className="flex items-center">
            <CaretDownOutlined
              style={{ fontSize: "16px", color: "#333", marginRight: "8px" }}
            />
            <Pagination
              current={currentPage}
              total={transactions.length}
              pageSize={pageSize}
              showSizeChanger={false}
              onChange={handlePageChange}
            />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
