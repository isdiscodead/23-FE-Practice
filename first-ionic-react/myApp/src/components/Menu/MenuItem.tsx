import React from 'react'
import { styled } from 'styled-components';

interface MenuInfo {
    title: string,
    href: string,
    children?: React.ReactNode; 
}


const StyledMenuItem = styled.div`
    border-bottom: 1px solid lightgray;
    margin-bottom: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
`;

export default function MenuItem({ title, href, children }: MenuInfo) {
  return (
    <StyledMenuItem>
        { title }
        { children }
    </StyledMenuItem>
  )
}
