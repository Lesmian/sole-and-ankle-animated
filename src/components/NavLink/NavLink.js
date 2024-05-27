import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";

const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <Text>{children}</Text>
      <Line />
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

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  font-weight: ${WEIGHTS.medium};
`;

const Line = styled.div`
  opacity: 0;
  border: 1px solid currentColor;
  transition: transform 300ms, opacity 300ms;
  transform: translateY(-4px) scaleY(0.5);

  ${Link}:hover & {
    opacity: 1;
    transform: translateY(5px) scaleY(2);
  }
`;

export default NavLink;
