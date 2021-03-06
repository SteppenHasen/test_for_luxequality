import './formInput.css'

export default function FormInput(props) {
    const {
      label, 
      type = 'text', 
      name, 
      value, 
      onChange
    } = props;
  
    return (
      <div className="FormInput">
        <label>{label}:</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    )
  }
  