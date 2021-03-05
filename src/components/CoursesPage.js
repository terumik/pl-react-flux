import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import courseStore from '../stores/courseStore';
import { loadCourses } from "../actions/courseActions";

function CoursesPage() {
  // const [courses, setCourses] = useState([]);
  // // [prop, setter]

  // // life cycle hook for class component
  // useEffect(() => {
  //   // getCourses().then((_courses) => {
  //   //   setCourses(_courses);
  //   //   console.log('courses', courseStore.getCourses());
  //   // });
  //   setCourses(courseStore.getCourses());
  // }, []); // note: have to have the second arg. if present, effect will only activate if the values in the list change

  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courses.length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange); // cleanup on unmount
  }, [courses.length]);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <React.Fragment>
      <h2>Courses</h2>
      {/* Child component */}
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} thead="ID"></CourseList>
    </React.Fragment>
  );
}

export default CoursesPage;

// note: Class component
// class CoursesPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       courses: [],
//     };
//   }
//   // or above can be written like this
//   //   state = {
//   //     courses: [],
//   //   };

//   // life cycle hook for class component
//   componentDidMount() {
//     getCourses().then((coursesRes) => {
//       //   this.state.courses = courses; // do not do this
//       this.setState({ courses: coursesRes });
//     });
//   }

//   _renderRow() {
//       return
//   }

//   render() {
//     return <React.Fragment>
//         <h2>Courses</h2>
//         <table className="table">
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Title</th>
//                     <th>Author ID</th>
//                     <th>Category</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {/* to write a JS, use {} */}
//                 {
//                     this.state.courses.map(course => {
//                         return (
//                             // React requires to specify a unique key to the mapped element. better not to use index
//                             <tr key={course.id}>
//                                 <td>{course.id}</td>
//                                 <td>{course.title}</td>
//                                 <td>{course.authorId}</td>
//                                 <td>{course.category}</td>
//                             </tr>
//                         )
//                     })
//                 }
//             </tbody>
//         </table>
//     </React.Fragment>;
//   }
// }

// export default CoursesPage;
