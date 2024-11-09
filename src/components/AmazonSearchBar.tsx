import React from "react";
import { IconChevronDown, IconSearch } from "@tabler/icons-react";

function AmazonSearchBar() {
  //   const [category, setCategory] = useState("All");
  //   const categories = ["All", "Books", "Electronics", "Fashion", "Toys"];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "10px",
        overflow: "hidden",
        width: "60rem",
      }}
    >
      {/* Dropdown for Category Selection */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 8px",
          backgroundColor: "#f1f1f1",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            padding: "14px 10px",
            border: "none",
            cursor: "pointer",
            fontWeight:"700px",
            fontSize:"16px"
          }}
        >
          All
        </span>
        <IconChevronDown size={16} style={{ marginLeft: "4px" }} />
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Amazon"
        style={{
          flexGrow: 1,
          padding: "14px",
          border: "none",
          outline: "none",
          width: "300px",
        }}
      />

      {/* Search Button */}
      <button
        style={{
          padding: "8px 20px",
          backgroundColor: "#febd69",
          border: "none",
          cursor: "pointer",
        }}
      >
        <IconSearch size={30} style={{ paddingTop: "4px" }} />
      </button>
    </div>
  );
}

export default AmazonSearchBar;
