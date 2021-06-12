const Button = ({ name, color, width }) => {    
    return (        
        <button className={`${color} ${width}`}>{name}</button>
    )
}

export default Button;