'use client';

import React, { useEffect, useState } from 'react';

const SeniorApplicationForm = ({ jobId }) => {
  const [profile, setProfile] = useState(null);
  const [jobRequirements, setJobRequirements] = useState(null);
  const [formValues, setFormValues] = useState({
    resume: null,
    workHistory: null,
    photo: null,
    name: '',
    address: '',
    age: '',
    gender: '',
    industry: '',
    job_title: '',
    years_of_experience: ''
  });

  useEffect(() => {
    const fetchApplicationData = async () => {
      if (!jobId) {
        console.error('Job ID is undefined');
        return; // jobId が未定義の場合はリクエストをスキップ
      }

      console.log(`Fetching application data for jobId: ${jobId}`);
      try {
        const response = await fetch(`applications/apply/${jobId}`);
        console.log('Response Status:', response.status); // レスポンスのステータスコードを表示
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data); // 取得したデータを表示

        setProfile(data.senior_profile);
        setJobRequirements(data.application_conditions);
        setFormValues(prevValues => ({
          ...prevValues,
          name: data.senior_profile.name,
          address: data.senior_profile.address,
          age: data.senior_profile.age,
          gender: data.senior_profile.gender,
          industry: data.senior_profile.industry,
          job_title: data.senior_profile.job_title,
          years_of_experience: data.senior_profile.years_of_experience
        }));
      } catch (error) {
        console.error('Error fetching application data', error);
      }
    };

    fetchApplicationData();
  }, [jobId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormValues({ ...formValues, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(formValues).forEach(key => {
      formData.append(key, formValues[key]);
    });

    console.log('Submitting application with values:', formValues); // 送信するデータを表示

    try {
      const response = await fetch('/apply', {
        method: 'POST',
        body: formData,
      });

      console.log('Response Status:', response.status); // レスポンスのステータスコードを表示
      if (response.ok) {
        console.log('Application submitted successfully');
      } else {
        console.error('Error submitting application');
      }
    } catch (error) {
      console.error('Error submitting application', error);
    }
  };

  // プロフィールまたは求人要件がまだロードされていない場合
  if (!profile || !jobRequirements) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={formValues.name} onChange={handleInputChange} />

      <label>Address</label>
      <input type="text" name="address" value={formValues.address} onChange={handleInputChange} />

      <label>Age</label>
      <input type="number" name="age" value={formValues.age} onChange={handleInputChange} />

      <label>Gender</label>
      <input type="text" name="gender" value={formValues.gender} onChange={handleInputChange} />

      <label>Industry</label>
      <input type="text" name="industry" value={formValues.industry} onChange={handleInputChange} />

      <label>Job Title</label>
      <input type="text" name="job_title" value={formValues.job_title} onChange={handleInputChange} />

      <label>Years of Experience</label>
      <input type="number" name="years_of_experience" value={formValues.years_of_experience} onChange={handleInputChange} />

      {jobRequirements.is_resume_required && (
        <label>
          Resume (required):
          <input type="file" name="resume" onChange={handleFileChange} required />
        </label>
      )}

      {jobRequirements.is_work_history_required && (
        <label>
          Work History (required):
          <input type="file" name="workHistory" onChange={handleFileChange} required />
        </label>
      )}

      {jobRequirements.is_photo_required && (
        <label>
          Photo (required):
          <input type="file" name="photo" onChange={handleFileChange} required />
        </label>
      )}

      <button type="submit">Submit Application</button>
    </form>
  );
};

export default SeniorApplicationForm;
