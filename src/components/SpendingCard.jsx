import React from "react";
import SpendingViz from "./SpendingViz";
import SpendingInfo from "./SpendingInfo";
import { useState, useEffect } from "react";
import axios from "axios";

function SpendingCard() {
  const [spendingData, setSpendingData] = useState();

  const getTotal = data => {
    return data.reduce((acc, val) => acc + val.amount, 0);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("src/data/data.json");
      setSpendingData(getTotal(result.data));
    };

    fetchData();
  }, [spendingData]);

  return (
    <section className="spending-card">
      {/* Spending Visualization Component */}
      <SpendingViz />
      {/* Spending Information Component */}
      <SpendingInfo spendingData={spendingData} />
    </section>
  );
}

export default SpendingCard;
