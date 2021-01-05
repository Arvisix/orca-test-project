import React from "react";
import ReactModal from "react-modal";
import { ModalConsumer } from "./ModalContext";

const ModalRoot = () => (
  <ModalConsumer>
    {({ component: Component, props, hideModal, open }) => (
      <ReactModal isOpen={open} onRequestClose={hideModal}>
        {Component ? <Component {...props} onRequestClose={hideModal} /> : null}
      </ReactModal>
    )}
  </ModalConsumer>
);

export default ModalRoot;
