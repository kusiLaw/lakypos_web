import styles  from './input.module.css'


const InputText = ({ 
 type = "text", name ='name', 
 required= true, label='text', 
 min = "2", max = "30"
 }) => {
  return (

     <div className={styles.text_input_wrapper}>
       <input type={type}  required={required} name={name} id={name} min={min} max={max} className={styles.text_input} />
       <label htmlFor={name} className={styles.text_input_label}>{label}</label>
    </div>

  )
}


export default InputText



 