import { useDispatch } from 'react-redux';

import Button from '../../../components/Button'
import { deleteProcessButtonClicked } from '../actions';

const DeleteProcessButton = ({ row }) => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(deleteProcessButtonClicked(row.original.id))

  return <Button onClick={onClick}>🗑️</Button>;
};

export default DeleteProcessButton;
