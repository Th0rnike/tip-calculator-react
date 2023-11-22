import Button from "./Button";

const TipPercentComponent = ({getPercentage}) => {

    function handleButton(value){
        getPercentage(value);
    }

    const handleCustom = (e) => {
        let val = e.target.value;
        getPercentage(parseFloat(val))
    }

    const percentages = [5, 10, 15, 25, 50];

    return (
        <div className='percent_container'>
            <p>Select Tip %</p>
            <div className='buttons'>
                {percentages.map((p, index) => 
                    <Button onClick={handleButton} key={index} number={p}/>
                )}
                <input onChange={handleCustom} placeholder="Custom" type="number" id="custom_button"/>
            </div>
        </div>
    )
}

export default TipPercentComponent;