import { useDispatch } from "react-redux";

import Button from "../../../components/Button";
import { addNewProcessButtonClicked } from '../actions'

const NewProcessButton = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addNewProcessButtonClicked());
  };

  return <Button onClick={onClick}>+ New Proces</Button>;
};

export default NewProcessButton;
