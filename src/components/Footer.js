import React from "react";

export default function Footer({
  name,
  email,
  address,
  website,
  phone,
  bankAccount,
  bankName,
}) {
  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="footer flex flex-wrap items-center justify-center">
          <li>
            <span id="footerTitle" className="font-bold ">Your Name: </span>
            {name}
          </li>
          <li>
            <span id="footerTitle" className="font-bold ">Your Email: </span>
            {email}
          </li>
          <li>
            <span id="footerTitle" className="font-bold ">Your Address: </span>
            {address}
          </li>
          <li>
            <span id="footerTitle" className="font-bold ">Phone Number: </span>
            {phone}
          </li>
          <li>
            <span id="footerTitle" className="font-bold ">Bank: </span>
            {bankName}
          </li>
          <li>
            <span id="footerTitle" className="font-bold ">Account Holder: </span>
            {name}
          </li>
          <li>
            <span id="footerTitle" className="font-bold ">Account Number: </span>
            {bankAccount}
          </li>
          <li>
            <span id="footerTitle" className="font-bold ">Website: </span>
            <a href={website} target="_blank" rel="noopenner noreferrer">
              {website}
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
