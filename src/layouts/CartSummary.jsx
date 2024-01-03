import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownDivider } from 'semantic-ui-react'

export default function CartSummary() {
  return (
    <div><Dropdown item text='Sepetiniz'>
    <Dropdown.Menu>
      <Dropdown.Item>Asus</Dropdown.Item>
      <Dropdown.Item>Monster</Dropdown.Item>
      <Dropdown.Item>Apple</Dropdown.Item>
      <Dropdown.Divider/>
      <Dropdown.Item as={NavLink} to="/cartDetail">Sepete Git</Dropdown.Item>

    </Dropdown.Menu>
  </Dropdown></div>
  )
}
