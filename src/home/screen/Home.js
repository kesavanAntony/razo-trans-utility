import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
Footer

const Home = () => {
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header />
        <div className="container">
          <div className="row ">
            <div class="jumbotron my-5 shadow p-3 mb-5 bg-secondary text-light rounded">
              <h1 class=" text-center">ABOUT US</h1>
              <p class="lead">
                <strong>RAZO TRANS</strong> was founded in the Year 2023.
              </p>
              <hr class="my-4" />
              <p>
                Our Aim and Goal is to make digital payments Easy &amp;Safe also ensure that people
                never felt the need to carry cash again.RAZO TRANS was started with an idea to
                surpass the gap between physical and digital payments thus enabling users to perform
                digital transactions, also bridging the gap between the untapped market segments and
                the service providers using RAZO TRANS electronic transaction processing platform,
                the consumer can do transaction by visiting retail touch points either they can pay
                digitally or by way of cash. We at RAZO TRANS believe in the business philosophy of
                &quot;Making Life Simple&quot; and our innovative solutions are tuned to make the
                financial transactions seamless, quick, easy and strives to empower our Trade
                partners by providing every possible opportunity to earn with minimum investment and
                maximum earnings. We are aspiring to empower 50,000 stores across rural and urban
                towns in South India.RAZO TRANS envisions becoming a one-step shop for retails in
                their quest of serving the end customer.
              </p>
              <p>
                <strong>RAZO TRANS</strong> also works with banks to empower these unbanked people
                to access digital financial services for the very first time. Thus, the RAZO TRANS
                platform acts as a bridge and creates value for the banks as well as the end users
                and retail trade partners
              </p>

              <p className="p-0 m-0">
                <strong>Mission</strong>
              </p>
              <p>
                Easy and secure access of FinTech, Travel &amp; Allied Services online with best of
                margins &amp; support for our agent network and end customers
              </p>

              <p className="p-0 m-0">
                <strong>Vision</strong>
              </p>
              <p>
                Build most efficient &amp; profitable agent network in FinTech, Travel &amp; Allied
                Services across India
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
