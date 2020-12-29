import { AppWrapper, AppHeader } from './Process.styles';

import ProcessesTable from './components/ProcessesTable/ProcessesTable.component'

const ProcessPage = () => {
  return (
    <AppWrapper>
      <AppHeader>
        <ProcessesTable />
      </AppHeader>
    </AppWrapper>
  );
}

export default ProcessPage;
