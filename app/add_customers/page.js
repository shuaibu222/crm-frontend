'use client'

import { useState } from 'react'

export default function page() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")

    
      const handleSubmit = async (e) => {
        e.preventDefault();

        if (name && email && age) {
          const formData = {
            "name": name,
            "email": email,
            "age": age
          }

          console.log(formData);
    
          try {
            const response = await fetch('http://localhost:8080/api/v1/customers', {
              method: "POST",
              headers: {
              "Content-Type": "application/json"
              },
              body: JSON.stringify(formData),
            });

            console.log(response.status);
    
            if (response.ok) {
              console.log('Record added successfully.');
            } else {
              console.error('Failed to add record.');
            }
          } catch (error) {
            console.error('Error creating record:', error);
          }
        }

        setName("");
        setEmail("");
        setAge("");
      };


  return (
    <article className='flex flex-col mt-8'>
    {<section className='flex min-h-screen flex-col items-center p-24 max-w-7xl mx-auto my-0 gap-9'>
        <h1 className='text-4xl'>Add Customer Record</h1>
        <form className="flex flex-col gap-4" >
          <fieldset className='grid border-none gap-2'>
            <label htmlFor="title">Name: </label>
            <input
              type="text"
              className='w-full p-3 bg-black outline-none border-white border-2 rounded-md'
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="text"
              id="name"
            />
          </fieldset>
          <fieldset className='grid border-none gap-2'>
            <label htmlFor="title">Email: </label>
            <input
              type="text"
              className='w-full p-3 bg-black outline-none border-white border-2 rounded-md'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="text"
              id="email"
            />
          </fieldset>
          <fieldset className='grid border-none gap-2'>
            <label htmlFor="link">Age: </label>
            <input
              type="text"
              className='w-full p-3 bg-black outline-none border-white border-2 rounded-md'
              name="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </fieldset>
        </form>
        <button type='submit' className='border-none p-3 bg-orange-500 cursor-pointer rounded-md' onClick={handleSubmit}>Add Record</button>
    </section>}
    </article>
  )
}
