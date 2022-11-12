import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import styled from "styled-components";
import Category from "./Category";
import Search from "./Search";
import { AppContext } from './Context';


function NavBar() {
  const { state } = useContext(AppContext)

  return (
    <>
    <Nav className=''>
          <div className="flex space-x-3">
            <GiKnifeFork />
            <Logo to={"/"}>The Gentlemen's Cookbook</Logo>
            </div>
            <div className='flex flex-row'>
            {
              state.user 
              ? <Link to={"/profile"} style={{textDecoration: 'none'}}><Button className='font-bold'>{state.user}</Button></Link>
              : <Link to={"/login"} style={{textDecoration: 'none'}}><Button>Log in</Button></Link>
            }
            </div>
      </Nav>
        <Search />
      <div className='md:flex-col'>
            <Category />
      </div>
    </>
  )
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 2rem;
font-weight: 500;
font-family: 'Lobster Two','Montserrat';
 &:hover {
        color: #C1121F;
        /* font-weight: 500; */
 }
`

const Nav = styled.div`
padding: 1rem 0rem;
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 3rem;
margin-right: 3rem;
svg {
  font-size: 2.5rem;
}
`

const Button = styled.button`
    background: linear-gradient(35deg, #035784, #003049);
    color: white;
    display: flex;
    justify-content: flex-end;
    padding: 10px 25px;
    border-radius: 10px;
    outline: 0;
    text-transform: uppercase;
    text-decoration: none;
    margin-left: 10rem;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background 250ms;
    &:hover {
        background: linear-gradient(to right, #f27121, #e94057);
        font-weight: 800;
    }
`

export default NavBar;