import styles  from './input.module.css'
const InputText = ({ 
 type = "text", name ='name', 
 required= true, label='text', 
 min = "2", max = "30"
 }) => {
  return (

     <div className={styles.text_input_wrapper}>
       <input type={type}  required={required} name={name} id={name} min={min} max={max} className={styles.text_input} />
       <label for={name} className={styles.text_input_label}>{label}</label>

      <style jsx>{`
      .text_input_wrapper {
          position: relative;
   
          color: #132f4c;
         }

         .text_input_wrapper :global(input) {
          width: 100%;
          {/* height: 50px; */}
          padding: 13px 8px;
          font-size: 1.5rem;
          color: red;
          margin-bottom: 30px;
          border: none;
          {/* border-bottom: 1px solid #fff; */}
          outline: none;
          background: #f3f6f9;
         }

         .text_input_wrapper :global(input):focus{
 border-bottom: 2px solid #132f4c; 
}

         
         .text_input_wrapper :global(label) {
          position: absolute;
          top: 0;
          left: 0;
         
          padding: 13px 8px;
          font-size: 16px;
          color: #132f4c;
          pointer-events: none;
          transition: .5s;
         }

         .text_input_wrapper input:focus ~ label,
         .text_input_wrapper input:valid ~ label {
          top: -34px;
          left: 0;
          color: #132f4c;
          font-size: 14px;
          padding-left:0px
          

         }
      `}</style>



    </div>

  )
}


const TextArea = ({ 
  name ='name', 
 required= true, label='text', 
 col = "2", row = '5', maxLength = "250"
 }) => {
  return (

     <div className={styles.text_input_wrapper}>
       <textarea   required={required} name={name} id={name} rows={row} cols={col} maxlength={maxLength} className={styles.text_area_input} />
       <label for={name} className={styles.text__area_input_label}>{label}</label>
    </div>

  )
}


export {TextArea, InputText}


 