import personIcon from '../images/icon-person.svg'

const PeopleComponent = ({onChange}) => {

    const handleOnChange = (e) => {
        let value = e.target.value;
        onChange(value);
    }

    return (
        <div className='input_container'>
            <label htmlFor="nOfPeople'">Number of People</label>
            <img src={personIcon} alt="person icon" />
            <input onChange={handleOnChange} id='nOfPeople' type="number" placeholder='2'/>
        </div>
    )
}

export default PeopleComponent;