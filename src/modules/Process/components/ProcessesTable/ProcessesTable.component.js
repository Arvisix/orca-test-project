import React from "react";

import { useTable, useSortBy, useFilters } from "react-table";

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

const ProcessesTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: "Name",
        accessor: "name",
        Filter: DefaultColumnFilter
      },
      {
        Header: "Start Time",
        accessor: "startTime",
        disableFilters: true,
      },
      {
        Header: "Jobs Count",
        accessor: "jobsCount",
        disableFilters: true,
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
  } = useTable({ columns, data }, useFilters, useSortBy);

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
                <div>{column.canFilter ? column.render('Filter') : null}</div>
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
