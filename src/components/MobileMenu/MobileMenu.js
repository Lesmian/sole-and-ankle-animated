/* eslint-disable no-unused-vars */
import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale" delay={0.2}>
            Sale
          </NavLink>
          <NavLink href="/new" delay={0.4}>
            New&nbsp;Releases
          </NavLink>
          <NavLink href="/men" delay={0.6}>
            Men
          </NavLink>
          <NavLink href="/women" delay={0.8}>
            Women
          </NavLink>
          <NavLink href="/kids" delay={1}>
            Kids
          </NavLink>
          <NavLink href="/collections" delay={1.2}>
            Collections
          </NavLink>
        </Nav>
        <Footer>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slidein = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;

  animation: ${fadein} 0.5s;
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slidein} 0.5s cubic-bezier(0.67, 0.21, 0.82, 0.85);

    & > *:not {
      animation: ${fadein} 0.3s 0.3s backwards ease-in;
    }
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadein} 0.5s ${(props) => props.delay}s backwards
      cubic-bezier(0.67, 0.21, 0.82, 0.85);
  }

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
