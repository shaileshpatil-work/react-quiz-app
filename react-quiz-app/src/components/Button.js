const Button = ({ name, color, width }) => {    
    return (        
        <button className={`${color} ${width}`} type="button">{name}</button>
    )
}

export default Button;