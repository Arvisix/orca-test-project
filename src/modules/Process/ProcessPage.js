import { AppWrapper, AppHeader } from "./styles";

import ProcessesTable from "./components/ProcessesTable";
import NewProcessButton from "./components/NewProcessButton";

const ProcessPage = () => {
  return (
    <AppWrapper>
      <AppHeader>
        <ProcessesTable />
        <NewProcessButton />
      </AppHeader>
    </AppWrapper>
  );
};

export default ProcessPage;
