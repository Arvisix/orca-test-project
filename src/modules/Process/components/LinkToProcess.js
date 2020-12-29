import Link from "../../../components/Link";
import { processPath } from "../constants";

const LinkToProcess = ({ row }) => {
  return <Link href={processPath(row.original.id)}>{row.original.id}</Link>;
};

export default LinkToProcess;
