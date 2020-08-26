import React, { useEffect, useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import FocusLock from "react-focus-lock";

const modalRoot = document.getElementById("modal_container");

const ModalBack = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

const ModalWindow = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;

  & > label {
    margin: 10px;
    input {
      margin-left: 10px;
    }
  }
`;

const CloseButton = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  border: 1px solid #000;
  cursor: pointer;
`;

const Modal = (props) => {
  const el = document.createElement("div");
  let refInput1, refInput2;
  const refCreateInput1 = (el) => (refInput1 = el);
  const refCreateInput2 = (el) => (refInput2 = el);
  useEffect(() => {
    modalRoot.appendChild(el);
    refInput1.focus();
    return () => modalRoot.appendChild(el);
  }, []);

  return ReactDOM.createPortal(
    <FocusLock>
      <ModalBack>
        <ModalWindow>
          <h2>Test focus modal</h2>
          <label>
            input1
            <input ref={refCreateInput1} />
          </label>
          <label>
            input2
            <input ref={refCreateInput2} />
          </label>
          <CloseButton
            onClick={() => props.showModal(false)}
            onKeyPress={(e) => e.charCode === 13 && props.showModal(false)}
          >
            Close
          </CloseButton>
        </ModalWindow>
      </ModalBack>
    </FocusLock>,
    el
  );
};

export default Modal;
