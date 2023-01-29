import { Box } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

type LayoutProps = {
    children?: React.ReactNode
};

const Layout:React.FC<LayoutProps> = ({ children }) => {
    
    return (
        <Box
        h='calc(100vh)'
        bgImage="url('https://cdn4.vectorstock.com/i/1000x1000/91/03/geometric-blue-cold-texture-background-vector-24999103.jpg')"
        
        >
            <Navbar />
            <main>{children}</main>
            <Footer />
        </Box>
    )
}
export default Layout;