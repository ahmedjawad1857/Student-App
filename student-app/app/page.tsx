"use client";

import { useState } from "react";

export default function Student_app() {
  type Students = {
    name: string;
    RollNo: number;
    section: string;
  };
  type Students1 = [Students, Students, Students, Students];
  const [students, setStudents] = useState([
    {
      name: "Ahmad",
      RollNo: 1,
      section: "A",
    },
    {
      name: "Sheraz",
      RollNo: 2,
      section: "A",
    },
    {
      name: "Ali",
      RollNo: 3,
      section: "A",
    },
    {
      name: "Azaan",
      RollNo: 4,
      section: "B",
    },
  ]);
  function Delete(RollNo: number) {
    const newStudents = students.filter((item) => item.RollNo !== RollNo);
    setStudents(newStudents);
  }
  return (
    <table border={2}>
      <tr>
        <th>Student Name</th>
        <th>Student RollNo</th>
        <th>Student Section</th>
        <th>Delete</th>
      </tr>
      {students.map((items, index) => {
        return (
          <tr key={index}>
            <td>{items.name}</td>
            <td>{items.RollNo}</td>
            <td>{items.section}</td>
            <td>
              <button
                style={{
                  border: "none",
                  backgroundColor: "black",
                  color: "white",
                  width: "100px",
                  height: "30px",
                }}
                onClick={() => Delete(items.RollNo)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
}
