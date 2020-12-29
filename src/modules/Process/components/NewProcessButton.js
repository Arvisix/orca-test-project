import { useContext } from "react";

import { ModalContext } from "../../../components/Modal/ModalContext";
import Button from "../../../components/Button";
import NewProcessModal from "./NewProcessModal";

const NewProcessButton = () => {
  const { showModal } = useContext(ModalContext);

  const showNewProcessModal = () => {
    showModal(NewProcessModal);
  };

  return <Button onClick={showNewProcessModal}>+ New Proces</Button>;
};

export default NewProcessButton;
