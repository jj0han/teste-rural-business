import React from 'react'

export default function InputComponent({ formik, formikValue, formikError, placeholder, label, type = "text", name }) {
    return (
        <div className='flex flex-col grow mb-4'>
            <label htmlFor={name}>{label}</label>
            <input
                onChange={formik.handleChange(name)}
                placeholder={placeholder}
                type={type}
                name={name}
                value={formikValue}
                style={{ borderColor: formikError ? 'red' : '#D7D7D7' }}
                className='border-b rounded-sm py-1 outline-none' />
                {formikError && <p className="text-red-500">{formikError}</p>}
        </div>
    )
}
