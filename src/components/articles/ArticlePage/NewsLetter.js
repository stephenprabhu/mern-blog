import React,{useState, useRef} from "react";
import BackgroundImage from '../../../assets/images/bg_1.jpg';
import Swal from "sweetalert2";


const NewsLetter = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const [formIsValid, setFormIsVaid]=useState(true);
  const [sendingStarted, setSendingStarted]=useState(false);

  const formSubmitHandler=async (event)=>{
    event.preventDefault();
    const name=nameInputRef.current.value;
    const email=emailInputRef.current.value;
    if(name.trim().length === 0 || email.trim().length === 0 || !email.includes('@') || !email.includes('.')){
      setFormIsVaid(false);
      return;
    }
    setFormIsVaid(true);
    setSendingStarted(true);
    const request={
			method:'POST',
			headers:{'Content-Type': 'application/json'},
			body:JSON.stringify({
				first_name:name,
				last_name:"",
				email:email
			})
		};
    const res = await fetch('https://stephen-blog-backend.herokuapp.com/newsletter/add',request);
    if(res.ok){
      Swal.fire(
        `Thanks, ${name}`,
        'You Will Be Added To The Newsletter List',
        'success'
      );
      nameInputRef.current.value = '';
      emailInputRef.current.value = '';
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong at the server! Try Sending the message after some time.',
      });
    }
    setSendingStarted(false);
  }

  return (
    <div
      className="sidebar-box subs-wrap img"
      style={{backgroundImage: `url(${BackgroundImage})`}}
    >
      <div className="overlay"></div>
      <h3 className="mb-4 sidebar-heading">Newsletter</h3>
      <p className="mb-4">
      Never miss a story, Get notifications when new articles are added.
    </p>
    {formIsValid || <p style={{color:"red"}}>Form Fields Cannot Be Empty</p>}
      <form onSubmit={formSubmitHandler} className="subscribe-form">
        <div className="form-group">
        <input type="text" ref={nameInputRef} className="form-control" placeholder="Name" required/>
        <input type="email" ref={emailInputRef} className="form-control mt-1" placeholder="Email Address" required />
          <input
            type="submit"
            disabled={sendingStarted}
            value={sendingStarted ? "Sending Request...." : "Subscribe"}
            className="mt-2 btn btn-white submit"
          />
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
