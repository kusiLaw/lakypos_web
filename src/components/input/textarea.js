import styles  from './input.module.css'



const TextArea = ({ 
 name ='name', 
required= true, label='text', 
col = "2", row = '5', maxLength = "250"
}) => {
 return (

    <div className={styles.text_input_wrapper}>
      <textarea   required={required} name={name} id={name} rows={row} cols={col} maxLength={maxLength} className={styles.text_area_input} />
      <label htmlFor={name} className={styles.text__area_input_label}>{label}</label>
   </div>

 )
}

export default TextArea