import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHome, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import * as Styled from "./header.styles";
import { logout } from "../../services/auth.service";

const Header = (): React.ReactElement => {
  return (
    <Styled.Header>
      <Styled.Topnav>
        <Styled.Menu to="/notifications">
          <FontAwesomeIcon icon={faHome} /> Home
        </Styled.Menu>
        <Styled.Menu to="/notifications">
          <FontAwesomeIcon icon={faBell} /> Notifications
        </Styled.Menu>
        <Styled.Logout to="/login" onClick={logout}>
          <FontAwesomeIcon icon={faPowerOff} /> Logout
        </Styled.Logout>
      </Styled.Topnav>
    </Styled.Header>
  );
};

export default Header;
