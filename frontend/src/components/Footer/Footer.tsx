import { Flex, Text, Stack, HStack, Box } from "@chakra-ui/react";

const Footer:React.FC = () => {
    
    return (
        <Flex
        width={'105vw'}
        position='fixed'
        bottom={'0'}
        height='fit-content'
        bgColor='white'
        p='1'>
            <HStack>
                <Stack
                spacing={'0'}
                width='25vw'>
                
                <Text
                color={'#c3c3c3'}
                fontSize='1em'>
                    Developed for
                </Text>
                <Text fontSize='2em'>SwampHacks 2023</Text>
            </Stack>

            <Box
            width='25vw'>
                <Text as='b'>Contributors</Text>
                <Text>Aidan Burrowes</Text>
                <Text>Gabriella Conde</Text>
            </Box>
            </HStack>
            
        </Flex>
    )
}
export default Footer;