import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CourseList(props) {
  console.log("Props", props);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>{props.thead}</th>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {/* to write a JS, use {} */}
        {/* note: passed from the parent component (Courses.js) */}
        {props.courses.map((course) => {
          return (
            // React requires to specify a unique key to the mapped element. better not to use index
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>
                <Link to={`/course/${course.slug}`}>{course.title}</Link>
              </td>
              <td>{course.title}</td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// define the incoming data type from parent
CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  thead: PropTypes.string.isRequired,
};
CourseList.defaultProps = {
  courses: [],
  thead: "Default",
};

export default CourseList;
