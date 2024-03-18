import Link from 'next/link';
import React from 'react'

export default function Nav() {

  return (
    <nav className='flex max-w-7xl mx-auto mb-0 place-content-center gap-5 mt-4'>
        <Link href={"/"} className='border-b-2 border-b-transparent px-1 py-3 hover:border-orange-500 hover:text-orange-500 hover:transition-all hover:duration-150 hover:ease-in-out'>Home</Link>
        <Link href={"/add_customers"} className='border-b-2 border-b-transparent px-1 py-3 hover:border-orange-500 hover:text-orange-500 hover:transition-all hover:duration-150 hover:ease-in-out'>Add record</Link>
        <Link href={"/customers"} className='border-b-2 border-b-transparent px-1 py-3 hover:border-orange-500 hover:text-orange-500 hover:transition-all hover:duration-150 hover:ease-in-out'>Customers List</Link>
    </nav>
  )
}
