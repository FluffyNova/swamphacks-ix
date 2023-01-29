import { Flex, Text, Stack, HStack, Box } from "@chakra-ui/react";

const Footer:React.FC = () => {
    
    return (
        <Flex
        width={'105vw'}
        position='fixed'
        bottom={'0'}
        height='fit-content'
        bgColor='#E7E9EB'
        p='0'>
            <HStack>
                <Stack
                spacing={'0'}
                width='fit-content'
                paddingLeft='5'
                paddingRight='5'
                paddingTop='1' 
                textColor='black' >
                
                <Text
                fontSize='1em'>
                    Developed for
                </Text>
                <Text as='b' fontSize='2em'>SwampHacksIX</Text>
            </Stack>

            <Box
            width='fit-content'>
                <Text as='b'>Contributors</Text>
                <Text fontSize='1em'>Aidan Burrowes</Text>
                <Text fontSize='1em'>Gabriella Conde</Text>
            </Box>
            </HStack>
            
        </Flex>
    )
}
export default Footer;