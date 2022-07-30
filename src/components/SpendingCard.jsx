import React from "react";

function SpendingCard() {
  return (
    <section className="spending-card">
      {/* Spending Visualization Component */}
      <section className="spending-viz-container">
        <h1>Spending - Last 7 Days</h1>
        <ul>
          <li>
            {/* @todo: with state dynamically adjust amount and bar divs  */}
            <div className="amount-monday">
              <span>$23.55</span>
            </div>
            <div className="monday-bar"></div>
            <span>mon</span>
          </li>
          <li>
            <div className="amount-tuesday">
              <span>$23.55</span>
            </div>
            <div className="tuesday-bar"></div>
            <span>tue</span>
          </li>
          <li>
            <div className="amount-wednesday">
              <span>$23.55</span>
            </div>
            <div className="wednesday-bar"></div>
            <span>wed</span>
          </li>
          <li>
            <div className="amount-thursday">
              <span>$23.55</span>
            </div>
            <div className="thursday-bar"></div>
            <span>thu</span>
          </li>
          <li>
            <div className="amount-friday">
              <span>$23.55</span>
            </div>
            <div className="friday-bar"></div>
            <span>fri</span>
          </li>
          <li>
            <div className="amount-saturday">
              <span>$23.55</span>
            </div>
            <div className="saturday-bar"></div>
            <span>sat</span>
          </li>
          <li>
            <div className="amount-sunday">
              <span>$23.55</span>
            </div>
            <div className="sunday-bar"></div>
            <span>sun</span>
          </li>
        </ul>
        <div className="dividing-line"></div>
      </section>
      {/* Spending Information Component */}
      <section className="spending-info-container">
        <div>
          <span>Total this month</span>
          <h2 className="month-total">$478.33</h2>
        </div>

        <div>
          <h2 className="month-change">+2.4%</h2>
          <span>from last month</span>
        </div>
      </section>
    </section>
  );
}

export default SpendingCard;
