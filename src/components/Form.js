import './FormStyle.css'

import React, { useState, useEffect } from 'react'
import axios from 'axios'

// const [formData, setFormData] = useState({
//   name: '',
//   email: '',
//   subject: '',
//   message: '',
// })

// const handleChange = (e) => {
//   setFormData({ ...formData, [e.target.name]: e.target.value })
// }

// const handleSubmit = async (e) => {
//   e.preventDefault()

//   try {
//     // Send the form data to the backend
//     await axios.post('http://localhost:5000/api/contact', formData)

//     // Reset the form after submission
//     setFormData({
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//     })

//     alert('Contact form submitted successfully!')
//   } catch (error) {
//     console.error('Error submitting contact form:', error)
//     alert('Error submitting contact form. Please try again.')
//   }
// }

// const Form = () => {
//   return (
//     <div className='form'>
//       <form onSubmit={handleSubmit}>
//         <label>Your Name</label>
//         <input
//           type='text'
//           name='name'
//           value={formData.name}
//           onChange={handleChange}></input>
//         <label>Email</label>
//         <input
//           type='email'
//           name='email'
//           value={formData.email}
//           onChange={handleChange}></input>
//         <label>Subject</label>
//         <input
//           type='text'
//           name='subject'
//           value={formData.subject}
//           onChange={handleChange}></input>
//         <label>Message</label>
//         <textarea
//           rows='6'
//           placeholder='Type Your message here'
//           name='message'
//           value={formData.message}
//           onChange={handleChange}
//         />
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // Send the form data to the backend
      await axios.post('http://localhost:5000/api/contact', formData)

      // Reset the form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      alert('Contact form submitted successfully!')
    } catch (error) {
      console.error('Error submitting contact form:', error)
      alert('Error submitting contact form. Please try again.')
    }
  }
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}></input>
        <label>Email</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}></input>
        <label>Subject</label>
        <input
          type='text'
          name='subject'
          value={formData.subject}
          onChange={handleChange}></input>
        <label>Message</label>
        <textarea
          rows='6'
          placeholder='Type Your message here'
          name='message'
          value={formData.message}
          onChange={handleChange}
        />
        <button type='submit' className='btn'>
          Submit
        </button>
      </form>
    </div>
  )
}
export default Form
