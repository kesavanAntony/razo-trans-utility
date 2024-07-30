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
            <div className="jumbotron my-5 shadow p-3 mb-5 bg-secondary text-light rounded">
              <h1 className=" text-center">ABOUT US</h1>
              <p className="lead">
                <strong>RAZO TRANS</strong> was founded in the Year 2023.
              </p>
              <hr className="my-4" />
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
           <div className='container'>
     <div class="jumbotron">
          <h1 class="">Services</h1>
          <p className='fs-5'>Mobile Recharge, Wallet Recharge, and DTH Recharge Services</p>
          <p class="">
          Welcome to Razo Trans Utility, your one-stop solution for all your recharge needs. Our platform provides a seamless and secure way to recharge your mobile, wallet, and DTH services. Enjoy the convenience and ease of recharging from anywhere, anytime.
          </p>
          <hr class="my-4" />

          <h4>Mobile Recharge</h4>
          <p>
          Stay connected with our fast and easy mobile recharge service. Whether you need a prepaid or postpaid recharge, we have got you covered. We support all major telecom operators, ensuring that you can recharge your mobile number without any hassle.
          </p>
          <hr class="my-4" />
          <ul>
            <li><b>Instant Recharge :</b> Get your recharge done in seconds.</li>
            <li><b>Wide Network Coverage :</b> Supports all major telecom operators.</li>
            <li><b>Safe and Secure :</b> Your transactions are protected with advanced security measures.</li>
            <li><b>Pricing :</b>
            <ul>
              <li><b>Prepaid Plans :</b> Starting from ₹10 to ₹1,500.</li>
              <li><b>Postpaid Bills :</b> Pay your bill amount as per the invoice.</li>
            </ul>
            </li>
            
          </ul>
          {/* 2 */}
          <h4>Wallet Recharge</h4>
          <p>
          Top up your digital wallet with ease using our wallet recharge service. Whether it's for shopping, paying bills, or transferring money, keep your wallet ready for any transaction.
          </p>
          <hr class="my-4" />
          <ul>
            <li><b>Quick Top-Up :</b> Recharge your wallet instantly.</li>
            <li><b>Multiple Payment Options :</b> Use debit/credit cards, net banking, or UPI.</li>
            <li><b>Secure Transactions :</b> We prioritize your security with encrypted transactions.</li>
            <li><b>Pricing :</b>
            <ul>
              <li><b>Minimum Recharge :</b> ₹50.</li>
              <li><b>Maximum Recharge :</b> ₹10,000.</li>
            </ul>
            </li>
            
          </ul>
            {/* 3 */}

            <h4>DTH Recharge</h4>
          <p>
          Enjoy uninterrupted entertainment with our DTH recharge service. We support all major DTH service providers, making it simple to recharge your account and keep your favorite shows and channels active.
          </p>
          <hr class="my-4" />
          <ul>
            <li><b>Instant Activation :</b> Your DTH account is recharged instantly.</li>
            <li><b>Broad Provider Support :</b> Recharge services for all major DTH providers.</li>
            <li><b>Convenient and Reliable :</b> Easy and quick recharge process.</li>
            <li><b>Pricing :</b>
            <ul>
              <li><b>Basic Plans :</b> Starting from ₹99 per month.</li>
              <li><b>Premium Plans :</b> Up to ₹1,500 per month.</li>
            </ul>
            </li>
            
          </ul>

        </div>
           </div>
   

        <Footer />
      </div>
    </div>
  )
}

export default Home
