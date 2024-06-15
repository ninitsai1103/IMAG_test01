// import logo from './logo.svg';
// import './App.css';
// import './app.sass'
import React from "react";
import "./app.scss";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="event-name">白金瑪麗</div>
        <div className="title">已蒐集到的店家清單​</div>
        <div className="first-date">10/12 Bar Mood</div>
        <div className="second-date">11/29 To Infinity and Beyond</div>
        <div className="btns">
          <div className="w-btn btn1">點這集點</div>
          <div className="btns2">
            <div className="b-btn btn2">LINE POINTS 兌換</div>
            <div className="w-btn btn3">活動店家</div>
            <div className="b-btn btn4">已集點店家</div>
          </div>
        </div>
        <div className="warning">
          <img src="images/notice.png" alt="酒標" />
        </div>
      </div>
    </>
  );
}
