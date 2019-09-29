import * as React from "react";
import * as Scroll from "react-scroll";
import { CustomIcon as CustomIconComponent } from "../customIcon";
import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex !important;
  align-self: center;
  justify-content: space-between;
  border-bottom: 0.5px solid white;
  padding-bottom: 25px;
  min-width: 75px;
`;

export const CustomIcon = styled(CustomIconComponent)`
  font-size: 18px;
  color: black;

  :hover {
    color: white;
  }
`;

export const MenuLink = ({ section }) => (
  <li>
    <Scroll.Link to={`${section.toLowerCase()}-section`} smooth duration={1100}>
      <span />
      {section}
      <span />
    </Scroll.Link>
  </li>
);
