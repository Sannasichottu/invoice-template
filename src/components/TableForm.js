import React, { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'

export default function TableForm({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal
}) {
  const [isEditing, setIsEditing] = useState(false)
  //Submit form function
  const handleSubmit = (e) => {
    e.preventDefault()

    if(!description || !quantity || !price ) {
        alert("Please fill in all inputs")
    } else {

      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount
      }
      setDescription("")
      setQuantity("")
      setPrice("")
      setAmount("")
      setList([...list, newItems])
      setIsEditing(false)
    }


  }

  //Calculate item amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price)
    }
    calculateAmount(amount)
  },[amount, price,quantity, setAmount])
  

  //Calculate total amount of items in table
  useEffect (() => {
    let rows = document.querySelectorAll(".amount")
  let sum = 0;

  for(let i=0;  i < rows.length; i++) {
    if(rows[i].className === "amount") {
      sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
      setTotal(sum)
    }
  }
  })

  //Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setIsEditing(true)
    setDescription(editingRow.description)
    setQuantity(editingRow.quantity)
    setPrice(editingRow.price)

  }

  //Delete function
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id))
  }

  return (
    <>

      <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:mt-16">
        <label htmlFor="description" className="mb-3">Item description</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Item description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
      <div className="md:grid grid-cols-3 gap-10">
        <div className="flex flex-col">
          <label htmlFor="quantity" className="mb-3">Quantity</label>
          <input
            type="text"
            name="quantity"
            id="quantity"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="mb-3">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount" className="mb-3">Amount</label>
          <p id='total'>{amount} </p>
        </div>

      </div>
      <button type="submit" className="button mb-5 bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300" >
        {isEditing ? "Editing Row Item" : "Add Table Item"}
      </button>
      </form>
      {/* Table Items */}
      <table width="100%" className="mb-10 ">
      <thead className="mb-50 ">
           <tr className=' tableHead '>
            <td className=' py-2 font-bold'>Description</td>
            <td className='font-bold'>Quantity</td>
            <td className='font-bold'>Price</td>
            <td className='font-bold' >Delete</td>
            <td className='font-bold' >Edit</td>
            <td className='font-bold' >Amount</td>
           </tr>
          </thead>
        {list.map(({id, description, quantity, price, amount}) => (
          <React.Fragment key={id}>
            
          <tbody className="tableBody ">
            <tr className="tableRow">
              <td className="py-2">{description}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td><button onClick={() => deleteRow(id)}><AiOutlineDelete className="text-red-500 font-bold text-xl"/></button></td>
              <td><button onClick={() => editRow(id)}><AiOutlineEdit className="text-green-500 font-bold text-xl"/></button></td>
              <td className="amount" id='total'>{amount}</td>
              
            </tr>
          </tbody>
        
          </React.Fragment>
        ))}
        </table>
        <div>
          <h2 className=" flex items-end justify-end text-4xl font-bold" id='total1'>₹ {total.toLocaleString()}</h2>
        </div>
    </>
  );
}
