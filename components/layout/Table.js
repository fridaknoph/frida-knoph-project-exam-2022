import React from "react";

const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.attributes.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
