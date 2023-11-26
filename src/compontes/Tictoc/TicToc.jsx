import React, { useRef, useState } from "react";
import "./Tic.css";
import cricle from "../Assets/circle.png";
import cross from "../Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

function TicToc() {
  let [count, setcount] = useState(0);
  let [lock, setlock] = useState(false);
  let titleref = useRef(" ");
  let box1 = useRef(" ");
  let box2 = useRef(" ");
  let box3 = useRef(" ");
  let box4 = useRef(" ");
  let box5 = useRef(" ");
  let box6 = useRef(" ");
  let box7 = useRef(" ");
  let box8 = useRef(" ");
  let box9 = useRef(" ");

  let box_arry = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${cross}">`;
      data[num] = "x";
      setcount(++count);
    } else {
      e.target.innerHTML = `<img src="${cricle}">`;
      data[num] = "0";
      setcount(++count);
    }
    chickwin();
  };
  const chickwin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };
  const won = (winner) => {
    setlock(true);
    if (winner === "x") {
      titleref.current.innerHTML = `Congratulation: <img src=${cross}> is the Winner `;
    } else {
      titleref.current.innerHTML = `Congratulation: <img src=${cricle}> is the Winner`;
    }
  };
  const reset = () => {
    setlock(false);
    data = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    titleref.current.innerHTML = "Tic Toc Game";
    box_arry.map((e) => {
      return (e.current.innerHTML = " ");
    });
  };
  return (
    <div className="container">
      <h1 className="title" ref={titleref}>
        Tic Toc Game
      </h1>
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            ref={box1}
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            ref={box2}
            className="boxes"
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            ref={box3}
            className="boxes"
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>

        <div className="row2">
          <div
            ref={box4}
            className="boxes"
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            ref={box5}
            className="boxes"
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            ref={box6}
            className="boxes"
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            ref={box7}
            className="boxes"
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            ref={box7}
            className="boxes"
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            ref={box8}
            className="boxes"
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button className="reset" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
}

export default TicToc;
