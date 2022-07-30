import React from "react";

function SpendingCard() {
  return (
    <section className="spending-card">
      {/* Spending Visualization Component */}
      <section className="spending-viz-container">
        <h1>Spending - Last 7 Days</h1>
        <ul>
          <li>
            <span>mon</span>
          </li>
          <li>
            <span>tue</span>
          </li>
          <li>
            <span>wed</span>
          </li>
          <li>
            <span>thu</span>
          </li>
          <li>
            <span>fri</span>
          </li>
          <li>
            <span>sat</span>
          </li>
          <li>
            <span>sun</span>
          </li>
        </ul>
        <div className="dividing-line"></div>
      </section>
      {/* Spending Information Component */}
      <section className="spending-info-container">
        <div>
          <span>Total this month</span>
          <h2>$478.33</h2>
        </div>

        <div>
          <h2>+2.4%</h2>
          <span>from last month</span>
        </div>
      </section>
    </section>
  );
}

export default SpendingCard;
