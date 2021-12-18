import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import BackendPaths from "../../backend-paths";

const ContactForm = () => {
  const [formIsValid,setFormIsValid]= useState(true);
  const [sendingStarted,setSendingStarted]= useState(false);

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const messageInputRef = useRef();

  const onSubmitHandler = async(event) => {
    event.preventDefault();
    //1. GET THE VALUES
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const subject = subjectInputRef.current.value;
    const message = messageInputRef.current.value;

    //2. VALIDATE
    if(name.trim().length === 0 || email.trim().length === 0 || subject.trim().length === 0 || message.trim().length === 0 || !email.includes('@')){
      setFormIsValid(false);
      return;
    }
    setFormIsValid(true);
    setSendingStarted(true);

    //3. SAVE DATA
    const request={
			method:'POST',
			headers:{'Content-type':'application/json'},
			body:JSON.stringify({
				name:name,
				email:email,
				subject:subject,
				message:message
			})
		}
    const res=await fetch(BackendPaths.CONTACT_FORM_SEND,request);

    //4. SHOW MESSAGE
    if(res.status==200){
      Swal.fire(
        `Thanks, ${nameInputRef.current.value}`,
        'Your Message Was Sent Successfully!',
        'success'
      );
      nameInputRef.current.value = '';
      emailInputRef.current.value = '';
      subjectInputRef.current.value = '';
      messageInputRef.current.value = '';
		}else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong at the server! Try Sending the message after some time.',
      });
    }

    setSendingStarted(false);
  
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {formIsValid || <p style={{color:"red"}}>Please Fill Out All The Fields</p>}
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Your Name"  ref={nameInputRef} required />
      </div>
      <div className="form-group">
        <input type="email" className="form-control" placeholder="Your Email" ref={emailInputRef} required />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Subject" ref={subjectInputRef} required />
      </div>
      <div className="form-group">
        <textarea
          name=""
          id=""
          cols="30"
          rows="7"
          ref={messageInputRef}
          className="form-control"
          placeholder="Your Message"
          required
        ></textarea>
      </div>
      <div className="form-group">
        <input
          type="submit"
          disabled={sendingStarted}
          value={sendingStarted ? "Sending....": "Send Message"}
          className="btn btn-primary py-3 px-5"
        />
      </div>
    </form>
  );
};

export default ContactForm;
