import React from 'react'

export default function ClientDetails({clientName, clientAddress}) {
  return (
    <>
        <section className="mt-10 " >
          <h2 className="text-2xl uppercase font-bold mb-3" id='clientName'>{clientName}</h2>
          <p id='clientAddress'>{clientAddress}</p>
        </section>
    </>
  )
}
