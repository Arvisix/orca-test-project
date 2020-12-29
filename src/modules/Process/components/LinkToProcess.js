import { useDispatch } from 'react-redux';

import { processLinkButtonClicked } from '../actions';

const LinkToProcess = ({ row }) => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(processLinkButtonClicked(row.original.id))

    return <button onClick={onClick}>{row.original.name}</button>
}

export default LinkToProcess;
