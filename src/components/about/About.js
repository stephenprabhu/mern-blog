import React,{useContext} from "react";
import AboutBackground from "../../assets/images/bg_4.jpg";
import AuthorImage from "../../assets/images/author.png";
import SocialIcons from "../UI/SocialIcons";
import NavContext from "../../store/nav-context";

const About = () => {
   const context = useContext(NavContext);
   context.setActivePage(2);
   
  return (
    <div
      className="hero-wrap hero-wrap-2 js-fullheight"
      style={{ backgroundImage: `url(${AboutBackground})` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="js-fullheight d-flex justify-content-center align-items-center">
        <div className="col-md-8 text text-center">
          <div
            className="img mb-4"
            style={{ backgroundImage: `url(${AuthorImage})` }}
          ></div>
          <div className="desc">
            <h2 className="subheading">Hello I'm</h2>
            <h1 className="mb-4">Stephen Prabhu</h1>
            <p className="mb-4">
              Hi, My name is Stephen and I'm the creator of the blog. This blog
              is a way for me to express my thoughts and ideas. It's a
              convenient place for me to reflect on my thoughts and musings and
              share them with anyone interested. Feel free to get in touch with
              me using the below social media connections or using the contact
              page.
            </p>
            <SocialIcons className={"ftco-social mt-3"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
