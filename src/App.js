import React, { Component } from 'react';
import './App.css';

class Course {
  constructor(college, dept, number, section, prof) {
    this.college = college;
    this.dept = dept;
    this.number = number;
    this.section = section;
    this.prof = prof;
    this.key = `${this.college} ${this.dept} ${this.number} ${this.section} ${this.prof}`;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    const columns = [
      'College',
      'Department',
      'Number',
      'Section',
      'Professor',
    ];

    const courses = [];
    const myCourses = [];

    this.state = {
      columns,
      courses,
      myCourses,
    };

    this.getCourse = this.getCourse.bind(this);
    this.myCourse = this.myCourse.bind(this);
    this.delete = this.delete.bind(this);
  }

  getCourse() {
    const courses = [
      new Course('CAS', 'CS', '112', 'B1', 'Sullivan'),
      new Course('CAS', 'CS', '332', 'A1', 'Bun'),
      new Course('CAS', 'CS', '350', 'A1', 'Sarkar'),
    ];
    this.setState({courses});
  }

  myCourse(college, dept, number, section, prof) {
    const course = new Course(college, dept, number, section, prof);
    const {myCourses} = this.state;
    myCourses.push(course);
    this.setState({myCourses});
  }

  delete(key) {
    this.setState({myCourses: this.state.myCourses.filter(course => course.key !== key)});
  }

  render() {
    const {columns, courses, myCourses} = this.state;
    return (
      <div className={"App"}>
        <button onClick={this.getCourse}>Get courses</button>
        <table>
          <caption>Courses List</caption>
          <thead>
            {columns.map(column => <th key={column}>{column}</th>)}
          </thead>
          <tbody>
            {
              courses.map(course => <tr key={course.key}>
                <td>{course.college}</td>
                <td>{course.dept}</td>
                <td>{course.number}</td>
                <td>{course.section}</td>
                <td>{course.prof}</td>
                <td>
                  <button onClick={() => this.myCourse(course.college, course.dept, course.number, course.section, course.prof)}>Add to my course</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
        <table>
          <caption>My courses</caption>
          <thead>
            {columns.map(column => <th key={column}>{column}</th>)}
          </thead>
          <tbody>
            {
              myCourses.map(course => <tr key={course.key}>
                <td>{course.college}</td>
                <td>{course.dept}</td>
                <td>{course.number}</td>
                <td>{course.section}</td>
                <td>{course.prof}</td>
                <td>
                  <button onClick={() => this.delete(course.key)}>Delete</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;