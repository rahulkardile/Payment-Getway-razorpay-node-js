import { VStack, Image, Button, Text, Checkbox } from '@chakra-ui/react'
import React from 'react'

const Card = ({amount, img, CheckoutHandler}) => {
  return (
    <VStack> 
        <Image src={img} boxSize={"64"} objectFit={'cover'}/>
        <Text>${amount}</Text>
        <Button onClick={ () => CheckoutHandler(amount)}>Buy now</Button>
    </VStack>
  )
}

export default Card