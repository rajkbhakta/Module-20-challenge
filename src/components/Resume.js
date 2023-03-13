import React from 'react'
import "./Resume.css"

function Resume() {
  return (
    <div className="resume-container">
    <div className="resume">
      <div className="section">
        <div className="content">
          <h2>Raj Bhakta</h2>
          <p>6222 UTSA Blvd, San Antonio, TX 78249</p>
          <p>325-220-1181</p>
          <p>rajkbhakta@gmail.com</p>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <h2>Experience</h2>
          <p>Allegiance Hospitality - Assistant Manager Intern, Austin TX</p>
          <ul>
            <li>
              Maintained business trends and focus of the hospitality
              industry, in order to remain competitive by attending various
              conventions and seminars
            </li>
            <li>
              Participated in financial activities such as monitoring the
              facility’s revenue per month, establishing budgets and
              allocating funds to departments
            </li>
            <li>
              Coordinated marketing and promotional materials to increase
              visibility in the local market by 20%
            </li>
            <li>
              Recruited and ensured all employees were properly trained. My
              efforts have led up to a 40% reduction in employee turnover
            </li>
          </ul>
          <p>Coleman Inn - Assistant Manager, Coleman TX</p>
          <ul>
            <li>
              Contributed to the successful development of the faculty and
              staff
            </li>
            <li>
              Responsible for positively representing and promoting the
              property through sites such as Trivago, Priceline, and Trip
              Advisor
            </li>
            <li>Build and maintain relationships with key clients</li>
            <li>Process financial transactions for the company</li>
            <li>
              Create daily cash reports for accounting managements and prepare
              daily cash deposits
            </li>
            <li>
              Prepared checks for employees and compile payroll information by
              managing payroll preparation, completing reports, and
              maintaining record
            </li>
          </ul>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <h2>Education</h2>
          <p>
            The University of Texas at San Antonio - B.B.A - Accounting,
            Management
          </p>
          <p>
            Web Development Bootcamp - Full-Stack Web Development Program, XYZ
            Bootcamp
          </p>
        </div>
      </div>
      <div className="section">
        <h2>Web Development Bootcamp</h2>
        <p>
          Apr 2021 - Oct 2021 | Full-Stack Web Development Program, XYZ
          Bootcamp
        </p>
      </div>
      <div className="section">
        <h2>Skills</h2>
        <ul>
          <li>
            Proficient in HTML, CSS, JavaScript, React, Node.js, and other web
            development tools and frameworks
          </li>
          <li>Familiarity with databases such as MongoDB and MySQL</li>
          <li>Experienced in agile development methodologies</li>
          <li>
            Skilled in Excel (Macros, Pivot Tables, V-lookups), QuickBooks,
            Oracle Financials, and Microsoft Dynamics
          </li>
        </ul>
      </div>
      <div className="section">
        <h2>Experience</h2>
        <div className="job">
          <h3>Allegiance Hospitality</h3>
          <p>May 2019 - Aug 2019 | Assistant Manager Intern, Austin TX</p>
          <ul>
            <li>
              Maintained business trends and focus of the hospitality
              industry, in order to remain competitive by attending various
              conventions and seminars
            </li>
            <li>
              Participated in financial activities such as monitoring the
              facility’s revenue per month, establishing budgets and
              allocating funds to departments
            </li>
            <li>
              Coordinated marketing and promotional materials to increase
              visibility in the local market by 20%
            </li>
            <li>
              Recruited and ensured all employees were properly trained. My
              efforts have led up to a 40% reduction in employee turnover
            </li>
          </ul>
        </div>
        <div className="job">
          <h3>Coleman Inn</h3>
          <p>Aug 2013 - Aug 2015 | Assistant Manager, Coleman TX</p>
          <ul>
            <li>
              Contributed to the successful development of the faculty and
              staff
            </li>
            <li>
              Responsible for positively representing and promoting the
              property through sites such as Trivago, Priceline, and Trip
              Advisor
            </li>
            <li>Build and maintain relationships with key clients</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Resume