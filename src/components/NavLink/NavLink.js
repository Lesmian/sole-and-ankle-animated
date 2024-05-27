import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";

const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <Text>{children}</Text>
      <BoldText aria-hidden>{children}</BoldText>
    </Link>
  );
};

const Link = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  font-weight: ${WEIGHTS.medium};
  display: block;
  transition: transform 300ms;
  @media (prefers-reduced-motion: no-preference) {
    ${Link}:hover & {
      transform: translateY(-100%);
    }
  }
`;

const BoldText = styled.span`
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  bottom: -100%;
  left: 0;
  transition: bottom 300ms;
  @media (prefers-reduced-motion: no-preference) {
    ${Link}:hover & {
      bottom: 0;
    }
  }
`;

export default NavLink;
