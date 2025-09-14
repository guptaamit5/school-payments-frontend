import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/transactions", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTransactions(res.data);
      } catch (err) {
        console.error("Error fetching transactions", err);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Transactions Dashboard</h1>
      <table className="w-full border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Collect ID</th>
            <th className="p-3 border">Amount</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((t, i) => (
              <tr key={i} className="hover:bg-gray-100">
                <td className="p-2 border">{t.collect_id}</td>
                <td className="p-2 border">₹{t.order_amount}</td>
                <td className="p-2 border">{t.status}</td>
                <td className="p-2 border">{new Date(t.payment_time).toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-4 text-center text-gray-500">
                No transactions found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
