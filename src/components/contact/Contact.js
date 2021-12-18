import React,{useContext} from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import EmailArtwork from '../../assets/images/emailArtwork.png';
import NavContext from '../../store/nav-context';

const Contact = () => {
    const context = useContext(NavContext);
    context.setActivePage(3);
    
    return (
        <section className="ftco-section contact-section">
	      <div className="container">
            <ContactInfo />
            <div className="row block-9">
                <div className="col-md-6 order-md-last pr-md-5">
                    <ContactForm />
                </div>
                <div className="col-md-6">
                <img src={EmailArtwork} width={500} />
	          </div>
            </div>
          </div>
        </section>
    )
}

export default Contact;
