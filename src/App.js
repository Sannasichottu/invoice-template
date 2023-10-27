import "./App.css";

function App() {
  const handlePrint = () => {
    window.print()
  }
  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {/* Header Start */}
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
          <div>
            <h1 className="font-bold uppercase tracking-white text-4xl mb-3">Invoicer</h1>
          </div>
          <div>
            <ul className="flex items-center justify-between flex-wrap">
              <li><button onClick={handlePrint} className="btn btn-print" >Print </button></li>
              <li><button className="btn btn-download">Download</button></li>
              <li><button className="btn btn-send">Send</button></li>
            </ul>
          </div>
        </header>
        {/* Header End */}

        {/* Your Details Start */}
        <section className="flex flex-col items-end justify-end">
        {/* <input type="text" name="text" id="text" placeholder="Enter Your Name" required/> */}
          <h2 className="text-xl uppercase">Tass</h2>
          <p>Your Address</p>
        </section>
        {/* Your Details End */}
        {/* Client details Start */}
        <section className="mt-5 ">
          <h2 className="text-xl uppercase">Client's Name</h2>
          <p>Client's Address</p>
        </section>
        {/* Client details End */}
        {/* Date Start */}
        <article className="my-5 flex items-end justify-end">
          <ul>
            <li><span className="font-bold ">Invoicer number:</span> </li>
            <li><span className="font-bold ">Invoice date:</span> </li>
            <li><span className="font-bold ">Due Date:</span> </li>
          </ul>
        </article>
        {/* Date End */}
        {/* Table Start */}
          <div className="my-5">this is the table</div>
        {/* Table End */}
        {/* Notes Start */}
        <section className="mb-5">
          {/* Textarea Start */}
          <p>Notes to the Client...</p>
        </section>
        {/* Notes End */}
        {/* Footer Start */}
        <footer>
          <ul className="flex flex-wrap items-center justify-center"> 
            <li><span className="font-bold ">Your Name:</span></li>
            <li><span className="font-bold ">Your Email:</span></li>
            <li><span className="font-bold ">Phone Number:</span></li>
            <li><span className="font-bold ">Bank:</span></li>
            <li><span className="font-bold ">Account Holder:</span></li>
            <li><span className="font-bold ">Account Number:</span></li>
            <li><span className="font-bold ">Website:</span></li>
          </ul>
        </footer>
        {/* Footer End */}

      </main>
    </>
  );
}

export default App;
