import React from "react";
import { useState } from "react";
import {ArrowUpShort, ArrowDownShort} from "react-bootstrap-icons";

const TableHead = ({ columns, handleSorting }) => {
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");

    const handleSortingChange = (label) => {
        let sortOrder = "";
        if (label === sortField && order === "asc"){
            sortOrder = "desc";
        }
        else {
            sortOrder = "asc";
        }
        setSortField(label);
        setOrder(sortOrder);
        handleSorting(label, sortOrder);
       };

    return (
    <thead>
        <tr>
            {columns.map((label) => {
                return <th key={label} onClick={() => handleSortingChange(label)}>
                {sortField === label && order === "asc" ? <ArrowUpShort/> : <></>}
                {sortField === label && order === "desc" ? <ArrowDownShort/> : <></>}
                    {label}</th>;
            })}
        </tr>
    </thead>
)};
   
   export default TableHead;