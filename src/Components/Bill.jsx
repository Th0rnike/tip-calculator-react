import dollar from '../images/icon-dollar.svg'

const Bill = ({onChange}) => {

    const handleOnChange = (e) => {
        const value = e.target.value;
        onChange(value)
    }

    return (
        <div className='input_container'>
            <label htmlFor="bill">Bill</label>
            <img src={dollar} alt="dollar sign" />
            <input onChange={handleOnChange} type='number' id='bill' placeholder='0.00'/>
        </div>
    )
}

export default Bill;