import React, { useState, useEffect } from "react";
import store from "../store";
import { observer } from "mobx-react";
import Modal from "./modal.jsx";

const changeCount = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    setNumber((Math.random() * 10).toFixed(2));
  }, []);
  return number;
};

const buttonsArr = [
  { class: "buttons__button buttons__button_primary", tabIndex: "1",ref: null },
  { class: "buttons__button", tabIndex: "2", ref: null },
];

const Main = () => {
  const count = changeCount();
  const [isShownModal, showModal] = useState(false);
  const [lastFocusButton, setLastFocusButton] = useState(null);
  useEffect(()=> {
    console.dir('lastFocusButton');
    console.dir(lastFocusButton);  
    if (lastFocusButton!==null && !!buttonsArr[lastFocusButton]) {
      buttonsArr[lastFocusButton].ref.current.focus();
      console.dir(buttonsArr[lastFocusButton]);
    }
  })
  return (
    <>
      <div className="mainblock">
        <div className="leftpart">
          <div className="blockinfo">
            <div className="blockinfo__subtitle">your number is {count}</div>
            <div className="blockinfo__title">
              HELPING YOU THRIVE IN ALL AREAS OF LIFE
            </div>
            <div className="blockinfo__description">
              Our highly talented therapists can help you with a range of issues
              including relationships, sex, PTSD, depression, social anxiety, or
              even just caring for yourself more. {store.compute}
            </div>
            <div className="buttons">
              {buttonsArr.map((button, i) => {
                if (!buttonsArr[i].ref) {
                  let refButton = React.createRef();
                  buttonsArr[i].ref = refButton;
                }
                console.dir(buttonsArr);
                return (
                  <div
                    className={button.class}
                    tabIndex={button.tabIndex}
                    onClick={()=>{showModal(true);setLastFocusButton(i);}}
                    ref={buttonsArr[i].ref}
                    key = {i}
                    // onKeyPress={(e) {=>} e.charCode === 13 && showModal(true)}
                  >
                    Show modal
                  </div>
                );
              })}
              {/* <div
                className="buttons__button buttons__button_primary"
                tabIndex={1}
                onClick={showModal}
                onKeyPress={(e) => e.charCode === 13 && showModal(true)}
              >
                {store.data.buttonText}
              </div>
              <div
                className="buttons__button"
                tabIndex={2}
                onClick={showModal}
                onKeyPress={(e) => e.charCode === 13 && showModal(true)}
              >
                Show modal
              </div> */}
            </div>
          </div>
        </div>
        <div className="rightpart">
          <div className="rightpart__figure">
            <div className="rightpart__figurelight"> </div>
          </div>
        </div>
      </div>
      {isShownModal && <Modal showModal={showModal} />}
    </>
  );
};

export default observer(Main);
