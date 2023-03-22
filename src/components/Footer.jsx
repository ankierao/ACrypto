import { Avatar, Box, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import founderPic from '../assest/Founder.jpeg'



const Footer = () => {
  return (
    <Box bgColor={'black'} color={'whiteAlpha.700'}
    minH={'48'}
    px={'16'}
    py={['16','8']}>

    <Stack direction={['column','row']} 
    h={'full'} 
    alignItems={'center'}>
    <VStack w={'full'} alignItems={['center','flex-start']}>

    <Text fontWeight={'bold'}>About Us</Text>
    <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left'] }>We are the best Crypto tranding App in India,we provide our guidance at very reasonable Price</Text>


    </VStack>
        <VStack>
            <Avatar boxSize={'28'} mt={['4','0']} src={founderPic}/>
            <Text>Our Founder</Text>
        </VStack>

    </Stack>



    </Box>
  )
}

export default Footer
