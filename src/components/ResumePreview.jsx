import React from "react";
const ResumePreview = ({ data }) => {
  return (
    <div className="resume-preview">
      <h2>Preview</h2>
      <p>
        <strong>Name:</strong> {data.name}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <h3>Education</h3>
      <p>{data.education}</p>
      <h3>Experience</h3>
      <p>{data.experience}</p>
      <h3>Skills</h3>
      <p>{data.skills}</p>
    </div>
  );
};
export default ResumePreview;
