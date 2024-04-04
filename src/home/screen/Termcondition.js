import React from 'react'
import Header from '../comp/Header';
import Footer from '../comp/Footer';
const Termcondition = () => {
  return (
    <div>
      <Header/>
      <div className='container'>
        <h3 className='text-center'>Terms and Condition</h3>
        <div className='row'>
           <h5>User Agreement</h5>
           <p>Clearly state that by using the CRM services, users agree to abide by the terms and conditions outlined in the document.</p> 
           <h5>Scope of Services</h5>
           <p>Describe the CRM services offered, including any limitations or restrictions on their use.</p> 
           <h5>User Registration</h5>
           <p>Outline the process for user registration, including eligibility requirements and account creation procedures.</p> 
           <h5>User Responsibilities</h5>
           <p>Specify the responsibilities of users, such as maintaining the confidentiality of their login credentials, complying with applicable laws, and using the CRM services responsibly.</p> 
           <h5>Data Privacy and Security</h5>
           <p>Explain how user data is collected, stored, and used, as well as the measures taken to protect user privacy and security.</p> 
           <h5>Intellectual Property</h5>
           <p>Clarify ownership rights to the content and intellectual property associated with the CRM services, including any user-generated content.</p> 
           <h5>Usage Restrictions</h5>
           <p>Detail prohibited activities and behaviors, such as unauthorized access, reverse engineering, or spamming.</p> 
           <h5>Payment Terms</h5>
           <p>If applicable, outline the terms of payment for any paid CRM services, including pricing, billing cycles, and accepted payment methods.</p> 
           <h5>Termination</h5>
           <p>Explain the circumstances under which user accounts may be terminated, such as for violation of the terms and conditions or non-payment of fees.</p> 
           <h5>Disclaimer of Warranties</h5>
           <p>Include a disclaimer stating that the CRM services are provided "as is" and without warranties of any kind, to the fullest extent permitted by law.</p> 
           <h5>Limitation of Liability</h5>
           <p>Limit your liability for damages arising from the use of the CRM services, excluding liability for certain types of damages or losses.</p>
           <h5>Governing Law</h5>
           <p> Specify the governing law and jurisdiction for resolving any disputes arising from the terms and conditions.</p>
           <h5>Changes to Terms</h5>
           <p>Reserve the right to update or change the terms and conditions, and explain how users will be notified of any changes.</p>
           <h5>Contact Information</h5>
           <p>Provide contact details for users to reach out with questions or concerns about the terms and conditions.</p>
           <h5>Legal Compliance</h5>
           <p>Ensure that your terms and conditions comply with relevant laws and regulations, such as data protection laws and consumer rights legislation.</p>
            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Termcondition
