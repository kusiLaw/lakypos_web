import React from 'react'

const InputText = ({ 
 type = "text", name ='name', 
 required= true, label='text', 
 min = "2", max = "30"
 }) => {
  return (

     <div class="text_input_wrapper">
       <input type={type}  required={required} name={name} placeholder={label} id={name} min={min} max={max} className="text_input" />
       <label for={name} className="text_input_label">{label}</label>

      <style jsx>{`


         .text_input_wrapper {
          position: relative;
         }

         .text_input_wrapper :global(input) {
          width: 100%;
          padding: 10px 0;
          font-size: 16px;
          color: #fff;
          margin-bottom: 30px;
          border: none;
          border-bottom: 1px solid #fff;
          outline: none;
          background: transparent;
         }

         .text_input_wrapper :global(label) {
          position: absolute;
          top: 0;
          left: 0;
          padding: 10px 0;
          font-size: 16px;
          color: #fff;
          pointer-events: none;
          transition: .5s;
         }

         .text_input_wrapper input:focus ~ label,
         .text_input_wrapper input:valid ~ label {
          top: -20px;
          left: 0;
          color: #fff;
          font-size: 12px;
         }
      `}</style>



    </div>

  )
}

export default InputText


 