import React from 'react'
import Header from '../comp/Header';
import Footer from '../comp/Footer';
Footer

const Home = () => {
  return (
    <div >
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <Header/>
      <div className='container'>
        <h3 className='text-center'>About Us</h3>
        <div className='row'>
            <h5>Company Overview</h5>
            <p>Provide a brief introduction to your company, including its mission, vision, and core values. Explain what sets your company apart from others in the industry.</p>
            <h5>History</h5>
            <p>Share a brief history of your company, including when it was founded, key milestones, and any significant achievements or growth points.</p>
            <h5>Team</h5>
            <p>Introduce key members of your team, including executives, managers, and other important personnel. Highlight their expertise and experience.</p>
            <h5>Values and Culture</h5>
            <p> Discuss your company's values and culture, emphasizing what drives your team and how you approach customer relationships.</p>
            <h5>Customer Focus</h5>
            <p>Highlight your commitment to customer satisfaction and how your CRM system helps you achieve this goal.</p>
            <h5>Technology and Innovation</h5>
            <p>Discuss any unique technology or innovations that your company has developed or utilizes to provide better CRM solutions.</p>
            <h5>Client Testimonials</h5>
            <p>Include testimonials or case studies from satisfied customers to demonstrate your company's track record of success.</p>
            <h5>Community Involvement</h5>
            <p>If applicable, mention any community initiatives or social responsibility programs your company participates in.</p>
            <h5>Contact Information</h5>
            <p>Provide contact details for customers who want to reach out for more information or support.</p>
            <h5>Call to Action</h5>
            <p>Encourage visitors to explore your website further or get in touch for more information.</p>    
            </div>
      </div>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
