function SpendingInfo({ spendingData }) {
  return (
    <section className="spending-info-container">
      <div>
        <span>Total this month</span>
        <h2 className="month-total">{`$${spendingData}`}</h2>
      </div>

      <div>
        <h2 className="month-change">+2.4%</h2>
        <span>from last month</span>
      </div>
    </section>
  );
}
export default SpendingInfo;
