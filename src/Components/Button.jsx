const Button = ({onClick, number}) => {
    function handleClick(e){
        let value = e.target.textContent;
        let p = parseInt(value.slice(0, 2))
        onClick(p)
    }

    return (
        <button onClick={handleClick} className='tips_button'>{number}%</button>
    )
}

export default Button;