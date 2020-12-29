import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppWrapper, AppHeader } from "./styles";

import ProcessesTable from "./components/ProcessesTable";
import NewProcessButton from "./components/NewProcessButton";
import { processesPageLoaded } from "./actions";

const ProcessPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(processesPageLoaded());
  }, []);

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
