import type { NextPage } from 'next'
import Head from 'next/head'
import { Flex, Text, Box, HStack, Button, Image, Input, CardBody, Card, CardFooter, CardHeader, Heading, VStack, RadioGroup, Radio } from '@chakra-ui/react'
import { ReactElement, useState } from 'react'

// SET TO BACKEND API SERVER
const HOST_PREFIX = 'https://swamphacksix.ue.r.appspot.com';

const Home: NextPage = () => {

  const [animalImg, setAnimalImg] = useState('https://static.scientificamerican.com/sciam/cache/file/EFBECD7F-2329-4015-92B1F5097D32B358_source.jpg?w=590&h=800&F6FD2A1B-3384-4EA5-894CF3B9330EA7FD')
  const [loading, setLoading] = useState(false)

  const [generateForm, setGenerateForm] = useState({
    seed: 0,
  });

  const onSubmit = (event: any) => {
      setLoading(true);
      event.preventDefault();
      //console.log(generateForm.seed)
      // call API
      const species_name = "dog"


      getAnimal(species_name)
      .then((response) => {
        console.log(response.analogy);
        // TODO UPDATE IMAGE SRC TO DECODE BASE64! BEFORE SETTING ANIMAL IMAGE SRC
        // ASSUMING RETURN OBJECT IS OF FORM {image: 636d37d7366d3...}
        setAnimalImg(response.image);
      })
      .then(() => setLoading(false));
  }

  const getAnimal = async (species_name: any) => {
    const request = await fetch(`${HOST_PREFIX}/image_request`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        animal: species_name
        //seed: generateForm.seed
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
        maxWidth="75vw"
        bgColor='#202A44'
        borderRadius="10px"
        alignItems={'center'}
        flexDirection="column"
        height={'fit-content'}
        opacity='.85'
        >
        
          <form onSubmit={onSubmit}>
            

              <CardHeader>
                <Heading
                textColor='white'>
                 Create your own ocean at the click of a button.
                </Heading>
              </CardHeader>

              <CardBody
              color="white" 
              textAlign={'left'}
              width='-webkit-fit-content'
              opacity='1' >
                Select the type of animal you wish to add to your ocean. Click the button below to generate an image of your animal.
              </CardBody>

              <CardFooter>

             
                <VStack
                width='max-content'>
                   
                    
                    <RadioGroup>

                    <HStack
                   textColor='white'
                   width='max-content'>

                      <VStack>
                        <Radio value='octopus'>Octopus</Radio>
                        <Radio value='pufferfish'>Pufferfish</Radio>
                        <Radio value='ray'>Ray</Radio>
                      </VStack>
                      
                      <VStack >
                        <Radio value='whale'>Whale</Radio>
                        <Radio value='eel'>Eel</Radio>
                        <Radio value='crab'>Crab</Radio>
                      </VStack>

                      <VStack >
                        <Radio value='squid'>Squid</Radio>
                        <Radio value='coral'>Coral</Radio>
                        <Radio value='dolphin'>Dolphin</Radio>
                      </VStack>

                      <VStack >
                        <Radio value='starfish'>Starfish</Radio>
                        <Radio value='lobster'>Lobster</Radio>
                        <Radio value='jellyfish'>Jellyfish</Radio>
                      </VStack>
                      
                      </HStack>

                      </RadioGroup>
                      
                    
                    
                   
                    <Button
                    marginLeft='2'
                    width="40%"
                    minWidth="200px" 
                    p='2'
                    display='block'
                    type="submit"
                    isLoading={loading}>
                      Generate Animal
                    </Button>
                  
                </VStack>   
                </CardFooter>
             
          </form>
        </Card>

        <Box 
        m="2" 
        width='-web-max-content'
        textAlign='center'
        height='fit-content' >

          <Box
          bgColor='white'
          p='2.5'
          borderRadius='10px'>

          <Image
            src={animalImg}
            width="auto" 
            height='100px'
            alt='your animal'
            borderRadius='10px'
            boxSize={'-webkit-fit-content'}
            m='0 auto'
            display='block'/>

          </Box>
        </Box>
    </Flex>
    
  )
}

export default Home