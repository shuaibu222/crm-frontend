'use client'

import React, {useState, useEffect} from "react";


export default function page() {
  const [customers, setCustomers] = useState([]);
  const [customersIsNull, setCustomersIsNull] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async (id) => {
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(`http://localhost:8080/api/v1/customers/${id}`, {
      method: "DELETE",
      headers: headers,
    });

    if (response.ok) {
      // const data = await response.json();
      setIsDeleted(true)
    } else {
      console.log("Error while deleting book");
    }
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      const headers = {
        "Content-Type": "application/json",
      };

      const response = await fetch("http://localhost:8080/api/v1/customers", {
        method: "GET",
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        if (data === null){
          setCustomersIsNull(true)
          console.log("No record found");
        }else {
          setCustomers(data);
        }
        
      } else {
        console.error("Error fetching customers");
      }
    };
  
      fetchCustomers();
      
  }, [isDeleted]);
  

  return (
    <article className="flex flex-col gap-3 mt-8">
      {!customersIsNull ? customers.map((customer) => {
        return (
          <div key={customer.id} className="px-3 py-2 flex justify-between h-28 border-white border-2 rounded-lg hover:bg-orange-500 hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer hover:text-white">
            <div className="flex flex-col justify-between">
            <h1 className="text-2xl">{customer.id}. {customer.name}</h1>
              <div className="text-sm">
                <p>Email: {customer.email}</p>
                <p>Age: {customer.age}</p>
              </div>
            </div>
            <div>
              <button className="px-3 py-1 border-black border-2 bg-red-500 rounded-md" onClick={() => handleDelete(customer.id)}>delete</button>
            </div>
          </div>
        )
      }) : <h1 className="text-4xl self-center">No record added yet.</h1>}
    </article>
  )
}
