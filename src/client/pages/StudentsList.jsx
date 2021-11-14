import React from "react";
import IMGCodeTest from "../assets/qrrrr.jpg";
import Navbar from "../components/Navbar";
const StudentsList = () => {
  // const data = props.location.state || {};
  return (
    <>
      <Navbar />
      <main class="class-list">
        <section class="class-codes">
          <section className="class-data">
            <p>Object oriented programming</p>
            <p>Pedro Wightman</p>
            <p>4 creds</p>
            <p>NRC: 4410</p>
            <p>Course code: IST1010</p>
          </section>
          <div class="codes-teacher">
            <p>Teacher's code</p>
            <img src={IMGCodeTest} alt="IMG" />
            <p>17028</p>
          </div>
          <div class="code-class">
            <p>Class code</p>
            <img src={IMGCodeTest} alt="IMG" />
            <p>17028</p>
          </div>
          <button className="button secondary-button generate-button">
            GENERATE NEW CODES
          </button>
        </section>

        <section class="class-search">
          <input class="search" type="text" placeholder="Type a student name" />
          <p class="class-status">12 students missing</p>
        </section>
        <section class="class-list-container">
          <div class="student-card">
            <img
              src="https://picsum.photos/600"
              alt="pp"
              class="student-picture"
            />
            <p class="student-name">Jonathan Arias Rua</p>
            <p class="student-code">200137471</p>
            <p class="student-logtime">log time: 9:31:18</p>
            <button class="delete-attendance">x</button>
          </div>
          <div class="student-card">
            <img
              src="https://picsum.photos/100"
              s
              alt="pp"
              class="student-picture"
            />
            <p class="student-name">Jonathan Arias Rua</p>
            <p class="student-code">200137471</p>
            <p class="student-logtime">log time: 9:31:18</p>
            <button class="delete-attendance">x</button>
          </div>
          <div class="student-card">
            <img
              src="https://picsum.photos/210"
              alt="pp"
              class="student-picture"
            />
            <p class="student-name">Jonathan Arias Rua</p>
            <p class="student-code">200137471</p>
            <p class="student-logtime">log time: 9:31:18</p>
            <button class="delete-attendance">x</button>
          </div>
          <div class="student-card">
            <img
              src="https://picsum.photos/200"
              alt="pp"
              class="student-picture"
            />
            <p class="student-name">Jonathan Arias Rua</p>
            <p class="student-code">200137471</p>
            <p class="student-logtime">log time: 9:31:18</p>
            <button class="delete-attendance">x</button>
          </div>
          <div class="student-card">
            <img
              src="https://picsum.photos/400"
              alt="pp"
              class="student-picture"
            />
            <p class="student-name">Jonathan Arias Rua</p>
            <p class="student-code">200137471</p>
            <p class="student-logtime">log time: 9:31:18</p>
            <button class="delete-attendance">x</button>
          </div>
          <div class="student-card">
            <img
              src="https://picsum.photos/300"
              alt="pp"
              class="student-picture"
            />
            <p class="student-name">Jonathan Arias Rua</p>
            <p class="student-code">200137471</p>
            <p class="student-logtime">log time: 9:31:18</p>
            <button class="delete-attendance">x</button>
          </div>
          <div class="student-card">
            <img
              src="https://picsum.photos/250"
              alt="pp"
              class="student-picture"
            />
            <p class="student-name">Jonathan Arias Rua</p>
            <p class="student-code">200137471</p>
            <p class="student-logtime">log time: 9:31:18</p>
            <button class="delete-attendance">x</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default StudentsList;
