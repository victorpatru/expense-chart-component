import React from "react";
import SpendingViz from "./SpendingViz";
import SpendingInfo from "./SpendingInfo";
import { useState, useEffect } from "react";
import axios from "axios";

function SpendingCard() {
  const [total, setTotal] = useState();
  const [spendingData, setSpendingData] = useState([]);

  const getTotal = data => {
    return data.reduce((acc, val) => acc + val.amount, 0);
  };

  const weeklySpending = data => {
    return data.map(item => item.amount);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/data/data.json");
      setTotal(getTotal(result.data));
      setSpendingData(weeklySpending(result.data));
    };

    fetchData();
  }, []);

  return (
    <section className="spending-card">
      {/* Spending Visualization Component */}
      <SpendingViz spendingData={spendingData} />
      {/* Spending Information Component */}
      <SpendingInfo total={total} />
    </section>
  );
}

export default SpendingCard;
