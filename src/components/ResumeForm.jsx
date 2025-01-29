import React from "react";
const ResumeForm = ({ formData, onFormChange, onGenerateResume }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onFormChange((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <form className="resume-form">
      <h2>Fill Your Details</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="education"
        placeholder="Education"
        value={formData.education}
        onChange={handleChange}
      />
      <input
        type="text"
        name="experience"
        placeholder="Experience"
        value={formData.experience}
        onChange={handleChange}
      />
      <input
        type="text"
        name="skills"
        placeholder="Skills"
        value={formData.skills}
        onChange={handleChange}
      />
      <button type="button" onClick={onGenerateResume}>
        Generate Resume
      </button>
    </form>
  );
};
export default ResumeForm;
