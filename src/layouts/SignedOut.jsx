import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {

  return (
    <>
    <Menu.Item>
    <Button primary onClick={props.signIn}>Giriş Yap</Button>
    <Button primary style={{marginLeft:"0.5em"}}>Kayıt ol</Button>
    </Menu.Item>

    </>


  )
}
