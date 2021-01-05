import React from "react";
import { useSelector } from "react-redux";
import { useTable, useSortBy } from "react-table";

import { StatusCell } from "../../../components/Table";
import DeleteProcessButton from "./DeleteProcessButton";
import LinkToProcess from "./LinkToProcess";
import { processesSelector } from "../selectors";

const ProcessesTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
        disableSortBy: true,
        Cell: LinkToProcess,
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
      {
        Header: "Status",
        accessor: "processStatus",
        Cell: StatusCell,
      },
      {
        Header: () => null,
        id: "deleter",
        Cell: DeleteProcessButton,
      },
    ],
    []
  );

  const data = useSelector(processesSelector);

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
