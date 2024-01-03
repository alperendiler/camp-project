import React, { useState } from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedOut from './SignedOut'
import SıgnedIn from './SıgnedIn'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navi() {

  const [isAuthenticated,setIsAuthenticated] = useState(false);
  
  const navigate = useNavigate();

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  function handleSignOut() {
    setIsAuthenticated(false);
    navigate('/');
  }

  return (
    <div>
       <Menu inverted fixed='top'>
        <Container>
        <Menu.Item
          name='home'
          as={NavLink} to="/"
        />
        <Menu.Item
          name='messages'
        
        />

        <Menu.Menu position='right'>
         <CartSummary/>
          {isAuthenticated? <SıgnedIn signOut={handleSignOut} /> :  <SignedOut signIn={handleSignIn}/>}
         
          
        </Menu.Menu>
        </Container>
      </Menu>
      
    </div>
  )
}
