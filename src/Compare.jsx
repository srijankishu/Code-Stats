// Compare.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const Compare = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://leetcode.com/_next/data/y93x6p75GoVuThLb6FOqN/contest.json"
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Data</h1>
      {userData ? (
        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
          {JSON.stringify(userData, null, 2)}
        </pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Compare;
