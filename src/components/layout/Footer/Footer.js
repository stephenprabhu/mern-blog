import React from "react";
import FooterArchiveList from "./FooterArchiveList";
import FooterCategoryList from "./FooterCategoryList";
import FooterContact from "./FooterContact";
import moment from "moment";
import SearchBar from "../../UI/SearchBar";
const Footer = () => {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container px-md-5">
        <div className="row mb-5">
          <div className="col-md">
            {/*<FooterCategoryList />*/}
            <div className="ftco-footer-widget ">
              <h2 className="ftco-heading-2">Search</h2>
              <SearchBar className={"searchBarFooter"} />
            </div>
          </div>
          <div className="col-md">
            <FooterArchiveList />
          </div>
          <div className="col-md">
            <FooterContact />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>
              Copyright &copy; {moment().format("YYYY")} All rights reserved |
              Created By{" "}
              <a href="https://stephenprabhu.com" target="_blank">
                Stephen
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
