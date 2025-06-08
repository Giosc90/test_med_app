import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

// Function component Notification to display user notifications
const Notification = ({ appointments, children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    console.log('inside use effect');
    if (appointments?.length > 0) {
      console.log('a new appointment');
      setAppointmentData(appointments[appointments.length - 1]);
      setShowNotification(true); // Show the notification when a new appointment is passed as prop
    }
  }, [appointments]);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }
    if (storedAppointmentData) {
      setDoctorData({
        name: storedAppointmentData.doctorName,
        speciality: storedAppointmentData.doctorSpeciality,
      });
      setAppointmentData(storedAppointmentData);
      setShowNotification(true);
    }
  }, []);

  return (
    <div>
      {/* Render Navbar */}
      <Navbar />

      {/* Render children components */}
      {children}

      {/* Display notification if user is logged in and notification is enabled */}
      {isLoggedIn && appointmentData && showNotification && (
        <div className="appointment-card">
          <div className="appointment-card__content">
            <h3 className="appointment-card__title">Appointment Details</h3>
            <div className="appointment-card__message">
              <p><strong>Doctor:</strong> {appointmentData.doctorName}</p>
              <p><strong>Name:</strong> {appointmentData.name}</p>
              <p><strong>Date:</strong> {appointmentData?.appointmentDate}</p>
              <p><strong>Time:</strong> {appointmentData?.selectedSlot}</p>
            </div>
            <button
              className="close-button"
              onClick={() => setShowNotification(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;