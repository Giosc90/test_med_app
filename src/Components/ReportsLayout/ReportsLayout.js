import React from 'react'
import "./ReportsLayout.css"
import pdfReport from "./public/patient_report.pdf"

const ReportsLayout = ({setShowReports}) => {

    const reports = [{
        "#": 1,
        "Doctor Name": "Dr. Jiao Yang",
        "Speciality": "Dentist",

    }, {
        "#": 2,
        "Doctor Name": "Dr. Patrick Wong",
        "Speciality": "Bone",

    }
]
  return (
<div className="reports-container">
  <div className="report-grid-header">
    <p>#</p>
    <p>Doctor Name</p>
    <p>Speciality</p>
    <p>View</p>
    <p>Download</p>
  </div>

  {reports.map((report, index) => (
    <div key={report['Doctor Name']} className="report-grid-row">
      <p>{report['#']}</p>
      <p>{report['Doctor Name']}</p>
      <p>{report['Speciality']}</p>
      <p>
        <a target="_blank" href={pdfReport} rel="noreferrer">
          <button className="report-btns">View Report</button>
        </a>
      </p>
      <p>
        <a href={pdfReport} download>
          <button className="report-btns">Download</button>
        </a>
      </p>
    </div>
  ))}

  <button className="close-btn btn3" onClick={() => setShowReports(false)}>Close</button>
</div>
  )
}

export default ReportsLayout
