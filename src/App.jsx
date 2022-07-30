// Your users should be able to:

// - View the bar chart and hover over the individual bars to see the correct amounts for each day
// - See the current day's bar highlighted in a different colour to the other bars
// - View the optimal layout for the content depending on their device's screen size
// - See hover states for all interactive elements on the page
// - **Bonus**: See dynamically generated bars based on the data provided in the local JSON file
import BalanceCard from "./components/Balance";
import SpendingCard from "./components/SpendingCard";

function App() {
  return (
    <main className="container">
      {/* Balance Component */}
      <BalanceCard />

      {/* Spending Card Component */}
      <SpendingCard />
    </main>
  );
}

export default App;
