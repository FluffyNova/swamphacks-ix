import { Flex, Text, Stack, HStack, Box } from "@chakra-ui/react";

const Footer:React.FC = () => {
    
    return (
        <Flex
        width={'105vw'}
        position='fixed'
        bottom={'0'}
        height='fit-content'
        bgColor='#E7E9EB'
        p='1'>
            <HStack>
                <Stack
                spacing={'0'}
                width='25vw'>
                
                <Text
                fontSize='1em'>
                    Developed for
                </Text>
                <Text as='b' fontSize='2em'>SwampHacksIX</Text>
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