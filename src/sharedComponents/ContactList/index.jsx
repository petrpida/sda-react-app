import React, { useEffect, useRef, useState } from "react";
import { contacts } from "../../contactsDb";
import NavButton from "../NavButton";

function getCountries() {
    const countries = []
    contacts.forEach(el => {
        if(!countries.includes(el.country)) {
            countries.push(el.country)
        }
    })
    return countries
}

export default function ContactsList() {
  const nameInputRef = useRef();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [inputValue, setInputValue] = useState("");
  const countries = getCountries()

  const [selectedCountry, setSelectedCountry] = useState()

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  useEffect(function() {
      nameInputRef.current.focus();
  }, [])

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        ref={nameInputRef}
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
      />
      <select onChange={function(e) {
          setSelectedCountry(e.target.value)
      }
    }>
        <option></option>
          {countries.map((el) => (<option value={el}>{el}</option>))}
      </select>
      {contacts
        .filter((el) => !selectedCountry || el.country.includes(selectedCountry))
        .filter((el) =>
          el.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
        )
        .slice(start, end)
        .map((contact, index) => (
          <div key={index}>
            {contact.name} {contact.phone} {contact.country}
          </div>
        ))}
      <div className="d-flex align-items-center mt-3">
        <button
          className="btn btn-primary"
          onClick={function () {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          {"<"}
        </button>
        <p className="mr-3 ml-3 mt-auto mb-auto">{page}</p>
        <button
          className="btn btn-primary"
          onClick={function () {
            if (contacts.length > end) {
              setPage(page + 1);
            }
          }}
        >
          {">"}
        </button>
        <button
          onClick={function () {
            setPageSize(1);
          }}
        >
          1
        </button>
        <button
          onClick={function () {
            setPageSize(5);
          }}
        >
          5
        </button>
        <button
          onClick={function () {
            setPageSize(10);
          }}
        >
          10
        </button>
        <button
          onClick={function () {
            setPageSize(50);
          }}
        >
          50
        </button>
      </div>
      <NavButton name="HOME" link="/"/>
    </div>
  );
}
