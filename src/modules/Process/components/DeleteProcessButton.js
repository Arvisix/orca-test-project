import { useDispatch } from 'react-redux';

import { deleteProcessButtonClicked } from '../actions';

const DeleteProcessButton = ({ row }) => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(deleteProcessButtonClicked(row.original.id))

  return <button onClick={onClick}>🗑️</button>;
};

export default DeleteProcessButton;
