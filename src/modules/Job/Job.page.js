import { AppWrapper, AppHeader } from './Job.styles';

import JobTable from './components/JobTable.component'

const JobPage = () => {
  return (
    <AppWrapper>
      <AppHeader>
        <JobTable />
      </AppHeader>
    </AppWrapper>
  );
}

export default JobPage;
