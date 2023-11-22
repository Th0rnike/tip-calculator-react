const Result = ({calculatedResult, tipValue, customValue}) => {

  const resultNumber = Number.isFinite(calculatedResult) ? calculatedResult.toFixed(2) : "0.00";
  let tipPercentage = customValue !== undefined ? customValue : tipValue;
  tipPercentage = tipPercentage !== 0 ? tipPercentage : null;

  const tip = (resultNumber * tipPercentage) / 100;
  const formattedTip = Number.isFinite(tip) ? tip.toFixed(2) : "0.00";

    return (
        <div className='result'>
          <div className="prices first" id="tip_amount">
            <p>Tip Amount <span>/ person</span></p>
            <h2>{formattedTip}</h2>
          </div>
          <div className="prices second" id="total_per_person">
            <p>Total <span>/ person</span></p>
            <h2>{resultNumber}</h2></div>
          <button id='reset'>reset</button>
        </div>
    )
}

export default Result;