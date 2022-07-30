// Your users should be able to:

// - View the bar chart and hover over the individual bars to see the correct amounts for each day
// - See the current day's bar highlighted in a different colour to the other bars
// - View the optimal layout for the content depending on their device's screen size
// - See hover states for all interactive elements on the page
// - **Bonus**: See dynamically generated bars based on the data provided in the local JSON file
import Balance from "./components/Balance";

function App() {
  return (
    <main className="container">
      {/* Balance Component */}
      <Balance />

      {/* Spending Visualization Component */}
      <section className="spending-viz-container">
        <span>Spending - Last 7 days</span>
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

        {/* Spending Information Component */}
        <section className="spending-info-container">
          <div>
            <span>Total this month</span>
            <span>$478.33</span>
          </div>

          <div>
            <span>+2.4%</span>
            <span>from last month</span>
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
