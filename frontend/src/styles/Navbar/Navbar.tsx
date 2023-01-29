import { Flex, Text, Box } from "@chakra-ui/react";

const Navbar:React.FC = () => {
    
    return (
        <Flex>
            <Box 
            width='100vw'
            height='fit-content'
            boxShadow='xl' p='6'
            bg='#202A44'
            padding={'0'}>
                <Text
                fontSize={'25px'}
                textColor='white'>
                    Project Name
                </Text>
            </Box>
        </Flex>
    )
}
export default Navbar;