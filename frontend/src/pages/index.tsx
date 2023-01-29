import type { NextPage } from 'next'
import Head from 'next/head'
import { Flex, Text, Box, HStack, Button, Image, Input, CardBody, Card, CardFooter, CardHeader, Heading } from '@chakra-ui/react'
import { ReactElement, useState } from 'react'

// SET TO BACKEND API SERVER
const HOST_PREFIX = '';

const Home: NextPage = () => {

  const [animalImg, setAnimalImg] = useState('https://static.scientificamerican.com/sciam/cache/file/EFBECD7F-2329-4015-92B1F5097D32B358_source.jpg?w=590&h=800&F6FD2A1B-3384-4EA5-894CF3B9330EA7FD')
  const [loading, setLoading] = useState(false)

  const [generateForm, setGenerateForm] = useState({
    seed: 0,
  });

  const onSubmit = (event: any) => {
      setLoading(true);
      event.preventDefault();
      console.log(generateForm.seed)
      // call API

      getAnimal()
      .then((response) => {
        console.log(response.analogy);
        // TODO UPDATE IMAGE SRC TO DECODE BASE64! BEFORE SETTING ANIMAL IMAGE SRC
        // ASSUMING RETURN OBJECT IS OF FORM {image: 636d37d7366d3...}
        setAnimalImg(response.image);
      })
      .then(() => setLoading(false));
  }

  const getAnimal = async () => {
    const request = await fetch(`${HOST_PREFIX}/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        seed: generateForm.seed
      }),
    });
    const data = await request.json();
    return data;
  };

  // just updates input form variables when they are changed
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenerateForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    

    <Flex
    flexDir='row' 
    justifyContent="center"
    
    bgSize="cover"
    opacity='1'
    alignItems='center'>
      
      
        <Card
        borderWidth="1px" 
        m="1" 
        maxWidth="50vw"
        bgColor='#202A44'
        borderRadius="10px"
        alignItems={'center'}
        flexDirection="column"
        height={'fit-content'}
        opacity='.85'
        >
        
          <form onSubmit={onSubmit}>
            <Flex ml="30px" 
            mr="30px" 
            flexDirection="column" >

              <CardBody
              color="white" 
              mt="25px"
              textAlign={'left'}
              width='-webkit-fit-content'
              opacity='1' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>

              <CardFooter>
                <HStack
                alignItems={'center'}
                flexWrap='wrap'
                opacity='1'>
                    <Input
                    mt="40px" 
                    color="white"
                    width="40%"
                    minWidth="200px" 
                    placeholder="Seed Number" 
                    required type="number"
                    onChange={onChange} 
                    name="seed"
                    fontWeight={500}
                    border="1.5px solid white"
                    _placeholder={{color: 'gray.400'}}
                    />

                    <Button
                    mt="20px"
                    width="40%"
                    minWidth="200px" 
                    p='2'
                    type="submit"
                    isLoading={loading}>
                      Generate Sea Animal
                    </Button>
                  </HStack>
                </CardFooter>
              </Flex>
          </form>
        </Card>

        <Box 
        m="2" 
        width='-web-max-content'
        textAlign='center'
        height='fit-content' >

          <Heading 
          m='0 auto'
          display='block'
          p='0'
          textColor='white'>
            Your Animal:
          </Heading>

          
            <Image
            src={animalImg}
            width="100px" 
            height='100px'
            alt='your animal'
            boxSize={'-webkit-fit-content'}
            m='0 auto'
            display='block'/>
        
          

          <Text
          p='0'
          alignItems='center'
          textColor='white' >
            Your animal is called
          </Text>
        </Box>
    </Flex>
  )
}

export default Home