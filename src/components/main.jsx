import React, { useState, useEffect } from "react";

const changeCount = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    setNumber((Math.random() * 10).toFixed(2));
  }, []);
  return number;
};

const Main = () => {
  const count = changeCount();
  return (
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
            even just caring for yourself more.
          </div>
          <div className="buttons">
            <div
              className="buttons__button buttons__button_primary"
              // onClick={() => setCount(changeCount())}
            >
              Who am I
            </div>
            <div className="buttons__button">What do I do</div>
          </div>
        </div>
      </div>
      <div className="rightpart">
        <div className="rightpart__figure">
          <div className="rightpart__figurelight"> </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
