import styled from "styled-components";

const StatusCell = ({ row }) => {
  const status = row.original.processStatus || "-";
  return <p>{status}</p>;
};

export default styled(StatusCell)`
  color: yellow;
`;
