import React from 'react'
import { Menu,Image,Dropdown, DropdownItem, DropdownMenu, MenuItem } from 'semantic-ui-react'

export default function SıgnedIn(props) {

  

  return (
    <>

        <Menu.Item>
            <Image avatar spaced="right" src="https://pbs.twimg.com/media/EzCinAcWQAswV6i?format=jpg&name=4096x4096"/>
            <Dropdown pointing="top left" text='Alperen'>
                <DropdownMenu>
                    <DropdownItem text="info" icon="info"/>
                    <DropdownItem onClick={props.signOut} text="sign-out" icon="sign-out"/>
                </DropdownMenu>
            </Dropdown>

        </Menu.Item>

    </>
  )
}
