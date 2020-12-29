import { useEffect } from "react";
import { useDispatch } from "react-redux";

import JobTable from './components/JobTable.component'
import { jobsPageLoaded } from "./actions";

import { AppWrapper, AppHeader } from './styles';

const JobPage = props => {
  const dispatch = useDispatch();
  const processId = props.match.params.id;

  useEffect(() => {
    dispatch(jobsPageLoaded(processId));
  }, []);

  return (
    <AppWrapper>
      <AppHeader>
        <JobTable />
      </AppHeader>
    </AppWrapper>
  );
}

export default JobPage;
