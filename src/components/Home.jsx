import { Box,Image,Text } from '@chakra-ui/react'
import React from 'react'
import btcSrc from '../assest/Btc.jpg'
import {motion} from 'framer-motion'


const Home = () => {
  return (
    <Box bgColor={"black"} w={"full"} h={"85vh"}>
    <Text
      fontSize={"6xl"}
      textAlign={"center"}
      fontWeight={"thin"}
      color={"whiteAlpha.700"}
      // mt={"-20"}
    >
      Acrypto
    </Text>
    <motion.div
      style={{
        height: "70vh",
        
      }}
      animate={{
        translateY: "20px",
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <Image
        w={"full"}
        h={"full"}
        objectFit={"contain"}
        src={btcSrc}
        // filter={"grayscale(1)"}
      />
    </motion.div>

    
  </Box>
  
  )
}

export default Home
