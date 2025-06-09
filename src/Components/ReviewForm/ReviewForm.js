import React, { useState, useEffect } from 'react';
import './ReviewForm.css';
import GiveReview from '../GiveReview/GiveReview';

const ReviewForm = () => {
  const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(null);
  const [doctorList, setDoctorList] = useState([]);

  const onSubmit = (reviewData) => {
    console.log('Review Data:', reviewData); // Check what's being submitted
    
    const updatedDoctorList = doctorList.map((doctor, index) => {
      if (index === selectedDoctorIndex) {
        return {
          ...doctor,
          review: reviewData.review,
          rating: reviewData.rating, // Store the rating
        };
      }
      return doctor;
    });
  
    setDoctorList(updatedDoctorList); // Update state with the new doctor list
    setSelectedDoctorIndex(null); // Hide the form after submission
  };
  

  const getDoctorsDetails = () => {
    fetch('https://api.npoint.io/9a5543d36f1460da2f63')
      .then((res) => res.json())
      .then((data) => setDoctorList(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDoctorsDetails();
  }, []);

  return (
    <div className="doctor-reviews-container">
      <table className="doctor-reviews-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Speciality</th>
            <th>Write a review</th>
            <th>Reviews</th>
          </tr>
        </thead>
        <tbody>
          {doctorList.map((doctor, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{doctor.name}</td>
              <td>{doctor.speciality}</td>
              <td>
                {selectedDoctorIndex === index ? (
                  <GiveReview
                    doctorName={doctor.name}
                    onSubmit={onSubmit}
                  />
                ) : (
                  <button
                    className="write-review-button"
                    onClick={() => setSelectedDoctorIndex(index)}
                    disabled={doctor.review}
                  >
                    Write a review
                  </button>
                )}
              </td>
              <td className="review-cell">

                {doctor.review ? doctor.review : '-'}
                {doctor.rating && (
                    <div className="review-rating">
                    {'★'.repeat(doctor.rating).padEnd(5, '☆')}
                  </div>
            )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewForm;