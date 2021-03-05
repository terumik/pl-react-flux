import * as courseApi from "../api/courseApi";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

// Do something and then dispatch an action

export function loadCourses() {
  return courseApi.getCourses().then(courses => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses
    });
  });
}

export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
      console.log('savedCourse', savedCourse);
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE, // required field
      course: savedCourse,
    });
  });
}
