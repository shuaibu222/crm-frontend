

export const metadata = {
  title: 'Customers List',
  description: 'The list of customers',
}

export default function CustomersLayout({ children }) {
  return (
      <main className="grid max-w-5xl mx-auto my-0 min-h-screen">{children}</main>
  )
}
