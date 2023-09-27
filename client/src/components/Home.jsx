import { Box, Stack } from '@chakra-ui/react'
import Card from './Card.jsx'
import axios from 'axios';

const Home = () => {

  const checkoutHandler = async (amount) => {
    const { data } = await axios.post("http://localhost:5000/checkout",{
      amount
    })
    console.log(data);
  }

  return (
    <Box>
      <Stack direction={['row', 'column']} h={'100vh'} alignItems={'center'} justifyContent={'center'}>
        <Card amount={5000} img="https://idestiny.in/wp-content/uploads/2022/09/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a_Avail__en-IN.jpg" checkoutHandler={checkoutHandler} />
        <Card amount={3000} img="https://www.digitaltrends.com/wp-content/uploads/2022/08/iPhone-SE-2022-Starlight-Back-in-Hand.jpg?p=1" checkoutHandler={checkoutHandler} />
      </Stack>
    </Box>
  )
}

export default Home