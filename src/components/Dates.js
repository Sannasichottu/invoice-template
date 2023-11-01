import React from 'react'

export default function Dates({invoiceNumber, invoiceDate, dueDate}) {
  return (
    <>
         <article className="mt-10 mb-14 flex items-end justify-end">
          <ul>
            <li className='py-5' ><span className="font-bold ">Invoicer number:</span>{invoiceNumber} </li>
            <li className='bg-gray-200' ><span className="font-bold  ">Invoice date:</span>{invoiceDate} </li>
            <li className='py-5'><span className="font-bold ">Due Date:</span> {dueDate} </li>
          </ul>
        </article>
    </>
  )
}