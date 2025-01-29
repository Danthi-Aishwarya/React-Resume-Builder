import React, { useState } from "react";
import Header from "./components/Header";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: "",
    experience: "",
    skills: "",
  });

  const [resumeData, setResumeData] = useState(null);

  const handleGenerateResume = () => {
    setResumeData(formData);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <ResumeForm
          formData={formData}
          onFormChange={setFormData}
          onGenerateResume={handleGenerateResume}
        />
        {resumeData && <ResumePreview data={resumeData} />}
      </div>
    </div>
  );
};

export default App;
