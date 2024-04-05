import React from 'react'
import Header from '../comp/Header';
import Footer from '../comp/Footer';

const Privacy = () => {
  return (
    <div>
        <Header/>
      <div className='container'>
        <h3 className='text-center my-5 '>Privacy And Policy</h3>
        <div className='row bg-secondary shadow p-3 mb-5 rounded text-light'>
           <h5 className='mt-5'>Data Collection and Consent:</h5>
           <p className='mb-4'>Clearly communicate to customers what data is being collected and why it's being collected.
Obtain explicit consent from customers before collecting their personal information.
Allow customers to opt-out of data collection if they wish.</p> 

           <h5>Data Storage and Security:</h5>
           <p className='mb-4'>Implement robust security measures to protect customer data from unauthorized access, breaches, or cyberattacks.
Use encryption and secure servers to store sensitive customer information.
Regularly update security protocols and conduct security audits to identify and address vulnerabilities.</p> 

           <h5>Compliance with Regulations:</h5>
           <p className='mb-4'>Ensure compliance with relevant data protection regulations such as GDPR (General Data Protection Regulation), CCPA (California Consumer Privacy Act), and other applicable laws.
Stay informed about changes to privacy laws and update CRM policies and procedures accordingly.</p> 

           <h5>Third-Party Integrations:</h5>
           <p className='mb-4'>Ensure that third-party integrations with the CRM system adhere to the same privacy standards and protocols.
Conduct due diligence when selecting third-party vendors and ensure they have robust privacy practices in place.</p> 

           <h5>Customer Communication and Education:</h5>
           <p className='mb-4'>Regularly communicate with customers about privacy practices and any updates to CRM policies.
Provide resources and educational materials to help customers understand their privacy rights and how their data is handled.</p> 

            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Privacy
