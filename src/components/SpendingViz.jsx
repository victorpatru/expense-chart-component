function SpendingViz({ spendingData }) {
  return (
    <section className="spending-viz-container">
      <h1>Spending - Last 7 Days</h1>
      <ul>
        <li>
          {/* @todo: with state dynamically adjust amount and bar divs  */}
          <div className="amount-monday">
            <span>{`$${spendingData[0]}`}</span>
          </div>
          <div className="monday-bar"></div>
          <span>mon</span>
        </li>
        <li>
          <div className="amount-tuesday">
            <span>{`$${spendingData[1]}`}</span>
          </div>
          <div className="tuesday-bar"></div>
          <span>tue</span>
        </li>
        <li>
          <div className="amount-wednesday">
            <span>{`$${spendingData[2]}`}</span>
          </div>
          <div className="wednesday-bar"></div>
          <span>wed</span>
        </li>
        <li>
          <div className="amount-thursday">
            <span>{`$${spendingData[3]}`}</span>
          </div>
          <div className="thursday-bar"></div>
          <span>thu</span>
        </li>
        <li>
          <div className="amount-friday">
            <span>{`$${spendingData[4]}`}</span>
          </div>
          <div className="friday-bar"></div>
          <span>fri</span>
        </li>
        <li>
          <div className="amount-saturday">
            <span>{`$${spendingData[5]}`}</span>
          </div>
          <div className="saturday-bar"></div>
          <span>sat</span>
        </li>
        <li>
          <div className="amount-sunday">
            <span>{`$${spendingData[6]}`}</span>
          </div>
          <div className="sunday-bar"></div>
          <span>sun</span>
        </li>
      </ul>
      <div className="dividing-line"></div>
    </section>
  );
}
export default SpendingViz;
