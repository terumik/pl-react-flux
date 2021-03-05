import { React, useEffect, useState } from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
// import * as courseApi from "./api/courseApi";
import { toast } from "react-toastify";
import courseStore from "./stores/courseStore";
import * as courseActions from "./actions/courseActions";

const ManageCoursePage = (props) => {
  //   debugger;
  //   let isBlocking = true;

  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const slug = props.match.params.slug; // from the path 'courses/:slug' defined in app.js
    if (slug) {
      // courseApi.getCourseBySlug(slug)
      // .then((_course) => {
      //   setCourse(_course);
      // });
      setCourse(courseStore.getCourseBySlug(slug));
    }
  }, [props.match.params.slug]);

  function handleChange(event) {
    // debugger;
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value,
    };
    // note: [event.target.name] is not an array. it's setting am object key dynamically
    setCourse(updatedCourse);
  }

  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required.";
    if (!course.authorId) _errors.authorId = "Author ID is required.";
    if (!course.category) _errors.category = "Category is required.";
    setErrors(_errors);
    console.log(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;

    // courseApi.saveCourse(course).then(() => {
    //   props.history.push("/courses");
    //   toast.success("Course saved.");
    // });
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved.");
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      {/* <Prompt when={isBlocking} message="Are you sure you want to leave?"></Prompt> */}
      {/* {props.match.params.slug} */}
      <CourseForm
        course={course}
        errors={errors}
        onValueChange={handleChange}
        onSubmit={handleSubmit}
      ></CourseForm>
      {/* Pass handleChange() to the child component 'CourseForm' as onValueChange  */}
    </>
  );
};

export default ManageCoursePage;
