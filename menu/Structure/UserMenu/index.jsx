import React from 'react';
import userDefaultImg from '../../../img/user-default.png';
import './index.scss';

export default () => {
  return (
    <div className="user-area btn-group">
      <span className="btn btn-link dropdown-toggle" data-toggle="dropdown">
        <img src={userDefaultImg} alt="" />
        <i className="fa fa-angle-down" />
      </span>
      <ul className="dropdown-menu dropdown-menu-right">
        <li>
          <a href="/logout">
            <i className="fa fa-sign-out" />
            {getLabel('menu.userLogout')}
          </a>
        </li>
      </ul>
    </div>
  );
};
