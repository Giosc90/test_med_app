// Import necessary modules from React library
import React, { useEffect,useState } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Navbar from './Components/Navbar/Navbar';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import DoctorCard from './Components/DoctorCard/DoctorCard';

// Function component for the main App
function App() {
    const [appointments, setAppointments] = useState([]);


  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
        <Notification
        
        appointments={appointments}
        
        >
          {/* Display the Navbar component */}
          <Navbar/>

          {/* Set up the Routes for different pages */}
          <Routes>

            <Route path="/" element={<Landing_Page />} />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Sign_Up />} />

            <Route path="/instant-consultation" element={<InstantConsultation />} />

            <Route path="/finddoctor" element={<FindDoctorSearch />} />

            <Route path="/book-consultation" element={<BookingConsultation 
            appointments={appointments}
            setAppointments={setAppointments}
            
            />} />
            
            <Route path="/review" element={<ReviewForm />} />

          </Routes>
        </Notification>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;