import React from "react";
import { useSelector } from "react-redux";
import { useTable, useFilters } from "react-table";

import ColumnFilter from '../../../components/Table/ColumnFilter'
import { getJobs } from '../selectors';

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

  const data = useSelector(getJobs)

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
