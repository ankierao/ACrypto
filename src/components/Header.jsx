import { Button, HStack,Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assest/images.png'

const Header = () => {
  return (
    <>
    <HStack p={'4'} shadow={'base'} bgColor={'black'} justifyContent={'space-between'}>
    <Image src={logo} h={'16'}  borderRadius={'50%'}  ></Image>
    <HStack>
    <Button  color='white'colorScheme='red' size={"sm"}>
        <Link to='/'>Home</Link>
    </Button>
    <Button color='white'colorScheme='red'size={"sm"}>
        <Link to='/exchanges' >Exchanges</Link>
    </Button>
    <Button color='white'colorScheme='red' size={"sm"}>
        <Link to='/coins'>Coins</Link>
    </Button>

    </HStack>
    
   
        {/* <Button variant={'unstyled'} color='white'>
        <Link to='/coin/:id'>Coin Details</Link>
    </Button> */}

    </HStack>
    </>
  )
}

export default Header
