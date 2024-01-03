import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownDivider, Label } from 'semantic-ui-react'

export default function CartSummary() {
 const {cartItems} =  useSelector(state=>state.cart)
  return (
    <div><Dropdown item text='Sepetiniz'>
    <Dropdown.Menu>
      {
        cartItems.map((cartItem)=>(
          <Dropdown.Item>{cartItem.product.title}
            <Label>
            {cartItem.price}
          </Label>
          </Dropdown.Item>
        
        ))
      }
      <Dropdown.Divider/>
      <Dropdown.Item as={NavLink} to="/cartDetail">Sepete Git</Dropdown.Item>

    </Dropdown.Menu>
  </Dropdown></div>
  )
}
