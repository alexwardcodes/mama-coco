import { Image, Flex, Text } from '@chakra-ui/react';
import logo from "./images/mama-coco-logo.jpg"
import './App.css';

const App = () => {
  return (
    <Flex width="100vw" height="100vh" alignItems="center" justifyContent="center" direction="column">
      <Image src={logo} width="380px" alignSelf="center" />
    <Text fontSize="30px" fontWeight="bold" color="#40311D">Coming soon...</Text>
    </Flex>
  )
};

export default App;
