import React from "react";

import { useTable, useSortBy } from "react-table";

const ProcessesTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
        disableSortBy: true,
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Start Time",
        accessor: "startTime",
      },
      {
        Header: "Jobs Count",
        accessor: "jobsCount",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        id: 11,
        name: "first",
        startTime: "18:00",
        jobsCount: 2,
      },
      {
        id: 2,
        name: "second",
        startTime: "9:00",
        jobsCount: 3,
      },
      {
        id: 43,
        name: "third",
        startTime: "23:00",
        jobsCount: 5,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProcessesTable;
