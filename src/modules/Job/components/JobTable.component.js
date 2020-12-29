import React from "react";
import { useTable, useFilters } from "react-table";

import ColumnFilter from '../../../components/Table/ColumnFilter'

const JobTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
        disableFilters: true,
      },
      {
        Header: "Process Id",
        accessor: "processId",
        disableFilters: true,
      },
      {
        Header: "Name",
        accessor: "name",
        Filter: ColumnFilter
      },
      {
        Header: "Status",
        accessor: "status",
        disableFilters: true,
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        id: 11,
        processId: 111,
        name: "first",
        status: "running",
      },
      {
        id: 112,
        processId: 1,
        name: "second",
        status: "successed",
      },
      {
        id: 113,
        processId: 11,
        name: "third",
        status: "failed",
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
  } = useTable({ columns, data }, useFilters);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
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

export default JobTable;
