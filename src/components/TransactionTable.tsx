interface Transaction {
  summary: JSX.Element | string;
  paymentId: JSX.Element | string;
  type: string;
  amount: string;
  balance: string;
  date: string;
  balanceIcon: JSX.Element; // New field for balance icon
}

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
          <p className="text-gray-700 font-bold text-sm">
            Initial Funding
          </p>
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

const TransactionTable = () => {
  return (
    <div className="bg-white shadow-md rounded-md">
      <div className="flex px-4 py-3 justify-between items-center">
        <h2 className="text-xl font-bold">Recent Transactions</h2>
        <a
          href="#"
          className="text-gray-400 flex items-center"
        >
          View All{" "}
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
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
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
            {transactions.map((transaction, index) => (
              <tr
                key={index}
                className="border-b"
              >
                <td className="px-4 py-4">{transaction.summary}</td>
                <td className="px-4 py-4">{transaction.paymentId}</td>
                <td className="px-4 py-4">
                  <span className="inline-block px-3 py-1 border rounded-full text-sm font-medium text-gray-600 border-primary">
                    {transaction.type}
                  </span>
                </td>
                <td className="px-4 text-gray-600 font-medium py-4">{transaction.amount}</td>
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
    </div>
  );
};

export default TransactionTable;
