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
        bgImage="url('https://media.istockphoto.com/id/670906286/pt/vetorial/blue-geometric-wallpaper-background.jpg?s=612x612&w=0&k=20&c=jl36Xxop5bnksUsuOeWKt5-Y3JVIaLlt_YwDRcMd__k=')"
        bgSize='cover'
        >
            <Navbar />
            <main>{children}</main>
            <Footer />
        </Box>
    )
}
export default Layout;