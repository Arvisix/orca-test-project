import { createContext, useState } from "react";

export const ModalContext = createContext({
  component: null,
  props: {},
  showModal: () => {},
  hideModal: () => {},
});

const ModalProvider = ({ children }) => {
  const showModal = (component, props = {}) => {
    setState({
      ...state,
      component,
      props,
    });
  };

  const hideModal = () =>
    setState({
      ...state,
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
