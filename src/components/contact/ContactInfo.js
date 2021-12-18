import React from 'react';

const ContactInfo = () => {
    return (
        <div className="row d-flex mb-5 contact-info">
        <div className="col-md-12 mb-4">
          <h2 className="h4 font-weight-bold">Contact Information</h2>
        </div>
        <div className="w-100"></div>
        <div className="col-md-4">
          <p><span>Location:</span> Mangalore, India</p>
        </div>
        <div className="col-md-4">
          <p><span>Email:</span> <a href="mailto:info@yoursite.com">contact@stephenprabhu.com</a></p>
        </div>
        <div className="col-md-4">
          <p><span>Website: </span> <a href="https://stephenprabhu.com/">stephenprabhu.com</a></p>
        </div>
      </div>
    )
}

export default ContactInfo;
