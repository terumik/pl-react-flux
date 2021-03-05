import React from "react";
import TextInput from "./components/common/TextInput";
import PropTypes from "prop-types";

function CourseForm(props) {
  console.log(props); // Comes from ManageCoursePage
  return (
    <form onSubmit={props.onSubmit}>
      {/* Get onValueChange() from props and assign to the onChange event. input field with value must have onChange event */}
      <TextInput
        id="title"
        type="text"
        name="title"
        label="Title"
        className="form-control"
        onChange={props.onValueChange}
        value={props.course.title}
        error={props.errors.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onValueChange}
            value={props.course.author || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>

      <TextInput
        type="text"
        id="category"
        name="category"
        label="Category"
        className="form-control"
        onChange={props.onValueChange}
        value={props.course.category}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
}

export default CourseForm;
