import React from 'react';

const FooterCategoryList = () => {
    return (
        <div className="ftco-footer-widget mb-4 ml-md-4">
        <h2 className="ftco-heading-2">Category</h2>
        <ul className="list-unstyled categories">
          <li><a href="#">Photography <span>(6)</span></a></li>
          <li><a href="#">Fashion <span>(8)</span></a></li>
          <li><a href="#">Technology <span>(2)</span></a></li>
          <li><a href="#">Travel <span>(2)</span></a></li>
        </ul>
      </div>
    )
}

export default FooterCategoryList;
