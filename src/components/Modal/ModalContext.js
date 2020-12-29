import { createContext, useState } from "react";

export const ModalContext = createContext({
  component: null,
  open: false,
  props: {},
  showModal: () => {},
  hideModal: () => {},
});

const ModalProvider = ({ children }) => {
  const showModal = (component, props = {}) => {
    setState({
      ...state,
      open: true,
      component,
      props,
    });
  };

  const hideModal = () =>
    setState({
      ...state,
      open: false,
      component: null,
      props: {},
    });

  const [state, setState] = useState({
    component: null,
    props: {},
    showModal,
    hideModal,
  });

  return (
    <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;

export const ModalConsumer = ModalContext.Consumer;
