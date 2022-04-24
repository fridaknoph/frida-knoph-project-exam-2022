import React from "react";
import Link from "next/link";
import { server } from "../../config/index";
import { useState, useEffect } from "react";
import Table from "../../components/layout/Table";

export default function HandleSearch() {
  const [search, setSearchBar] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${server}/api/hotels`);
      const data = await res.json;
      setData(JSON.stringify(data));
    };
    fetchData();
    console.log(data);
  }, []);

  return (
    <div>
      <input
        placeholder="Search Hotels..."
        className="nav__search"
        onChange={(e) => setSearchBar(e.target.value)}
      />
    </div>
  );
}
