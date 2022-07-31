import React from "react";
import SpendingViz from "./SpendingViz";
import SpendingInfo from "./SpendingInfo";
import { useState, useEffect } from "react";
import axios from "axios";

function SpendingCard() {
  const [spendingData, setSpendingData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("src/data/data.json");
      setSpendingData(result.data);
    };

    fetchData();
  }, []);

  return (
    <section className="spending-card">
      {/* Spending Visualization Component */}
      <SpendingViz />
      {/* Spending Information Component */}
      <SpendingInfo
        spendingData={() =>
          spendingData.reduce((acc, val) => acc + val.amount, 0)
        }
      />
    </section>
  );
}

export default SpendingCard;
