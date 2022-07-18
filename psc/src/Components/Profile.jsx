import React from 'react'
import {
    Menu,
    Flex,
    Button,
    MenuButton,
    MenuList,
    MenuItem,
    Avatar,
    
  } from '@chakra-ui/react'
const Profile=()=>{
    return (
        <Flex>
           <Menu>
  <MenuButton as={Button}
  rounded='full'
  variant='link'
  cursor='pointer'
  minW={0}>
  <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
  </MenuButton>
  <MenuList>
    <MenuItem zIndex={10000}>Cart</MenuItem>
    <MenuItem>Your Orders</MenuItem>
    <MenuItem>Login</MenuItem>
    <MenuItem>Logout</MenuItem>
  </MenuList>
</Menu> 
        </Flex>
    )
}

export default Profile