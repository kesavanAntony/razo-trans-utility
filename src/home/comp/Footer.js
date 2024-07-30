import React from 'react'
import { CFooter } from '@coreui/react'
import { Link } from 'react-router-dom'
import { cibFacebook, cibInstagram, cibTwitter, cibWhatsapp } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const Footer = () => {
  return (

    <footer class="bg-dark text-white pt-4">
    <div class="container">
        <div class="row">
            {/* <!-- Column 1 --> */}
            <div class="col-md-3">
                <h5>About Us</h5>
                <p>We are your one-stop solution for all recharge needs. Our platform provides seamless and secure recharges for mobile, wallet, and DTH services.</p>
            </div>
            {/* <!-- Column 2 --> */}
            <div class="col-md-3">
                <h5>Quick Links</h5>
                <ul class="list-unstyled">
                    <li><Link to="/" class="text-white text-decoration-none">Home</Link></li>
                    <li><Link to="/privacy" class="text-white text-decoration-none">Privacy</Link></li>
                    <li><Link to="/pdf" target='_blank' class="text-white text-decoration-none">Term & condition</Link></li>

                    <li><Link to="/contact" class="text-white text-decoration-none">Contact Us</Link></li>
                    <li><Link to="/login" class="text-white text-decoration-none">Login</Link></li>
                </ul>
            </div>
            <div class="col-md-3">
                <h5>Location</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10995.009219971924!2d80.22653145814441!3d13.015104840708089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526746b1e27cb3%3A0xc346d458e6175826!2svelachery!5e0!3m2!1sen!2sin!4v1722341564568!5m2!1sen!2sin"  className='rounded' style={{border:0,width:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* <!-- Column 3 --> */}
            <div class="col-md-3">
                <h5>Contact Us</h5>
                <p><i class="fas fa-map-marker-alt"></i>  New No.32/2, Old No.137/2, Velachery Road, Little Mount, saidapet, Chennai - 600015</p>
                <p><i class="fas fa-phone"></i> +91 99410 21198</p>
                <p><i class="fas fa-envelope"></i>razotransutility@gmail.com</p>
                <h5>Follow Us</h5>
                <a href="#" class="text-white mr-2"><CIcon icon={cibFacebook} className="me-2" /></a>
                <a href="#" class="text-white mr-2"><CIcon icon={cibInstagram} className="me-2" /></a>
                <a href="#" class="text-white mr-2"><CIcon icon={cibWhatsapp} className="me-2" /></a>
                <a href="#" class="text-white"><CIcon icon={cibTwitter} className="me-2" /></a>
            </div>
        </div>
        <hr class="bg-white"/>
        <div class="text-center pb-3">
            &copy; 2024 Razo Trans Utility. All rights reserved.
        </div>
    </div>
</footer>
    //  <CFooter className='bg-dark text-light'>
    //   <div className='col-md-6'>
    //     <a href="https://razo.co.in" target="_blank" rel="noopener noreferrer" className='text-white'>
    //       Razo Trans Utility Pvt Ltd
    //     </a>
    //     <span className="ms-1">Ⓒ Copy rights reserved </span>
    //   </div>
    //   <div className="text-end col-md-6">
    //     <span className="me-1">Designed by</span>
    //     <a href="https://optimista.in" target="_blank" rel="noopener noreferrer" className='text-white'>
    //       Optimista
    //     </a>
    //   </div>
    // </CFooter>
  )
}

export default Footer
