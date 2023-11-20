import Image from "next/image";

const Transactions = () => {
  return (
    <div className="p-5">
      <h2 className="mb-5 font-medium">Latest Transactions</h2>
      <table className="w-full">
        <thead className="mb-2">
          <tr className="font-semibold">
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center">
                <Image
                  src="data:image/png;base64,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"
                  alt="transaction-img"
                  height="40"
                  width="40"
                  className="object-cover rounded-full"
                />
                <span>Sai Surya Teja</span>
              </div>
            </td>
            <td>
              <span>Pending</span>
            </td>
            <td>14.11.2023</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center">
                <Image
                  src="data:image/png;base64,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"
                  alt="transaction-img"
                  height="40"
                  width="40"
                />
                <span>Sai Surya Teja</span>
              </div>
            </td>
            <td>
              <span>Pending</span>
            </td>
            <td>14.11.2023</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
