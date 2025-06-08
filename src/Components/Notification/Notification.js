// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

// Function component Notification to display user notifications
const Notification = ({appointments, children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
 

  

  useEffect(()=>{
    console.log('inside use effect')

    if(appointments?.length>0){
        console.log('a new appointment')
        setAppointmentData(appointments[appointments.length-1])
    }

},[appointments])

  console.log('is logged in:', isLoggedIn)
  console.log('appointments:',appointments)
  // useEffect hook to perform side effects in the component

  
  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    // Set isLoggedIn state to true and update username if storedUsername exists
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
    // Set doctorData state if storedDoctorData exists
    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }
    // Set appointmentData state if storedAppointmentData exists
    if (storedAppointmentData) {
      setDoctorData({ name: storedAppointmentData.doctorName, speciality: storedAppointmentData.doctorSpeciality });
      setAppointmentData(storedAppointmentData);
      setShowNotification(true);
    }
  
  }, []); // Empty dependency array ensures useEffect runs only once after initial render
  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in


  return (
    <div>
      {/* Render Navbar component */}
      <Navbar ></Navbar>
      {/* Render children components */}
      {children}
      {/* Display appointment details if user is logged in and appointmentData is available */}
      {isLoggedIn && appointmentData && (
        <>
          <div className="appointment-card">
            <div className="appointment-card__content">
              {/* Display title for appointment details */}
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                {/* Display doctor's name from doctorData */}
                <p><strong>Doctor:</strong> {appointmentData.doctorName}</p>
                <p><strong>Name:</strong> {appointmentData.name}</p>
                <p><strong>Date:</strong> {appointmentData?.appointmentDate}</p>
                <p><strong>Time:</strong> {appointmentData?.selectedSlot}</p>
               </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
// Export Notification component for use in other parts of the application
export default Notification;