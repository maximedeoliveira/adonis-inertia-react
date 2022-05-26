import React from 'react'
import { Box, ChakraProvider, Container, HStack, Text } from '@chakra-ui/react'

const Layout = (props) => {
    return (
        <div>
            <ChakraProvider>
                <Box bg="gray.800" px={2} py={6} mb={8}>
                    <Container maxW="7xl">
                        <HStack spacing={12}>
                            <Text color="white" fontWeight="bold">
                                adonis-inertia-react
                            </Text>
                            <Text color="white">Articles</Text>
                        </HStack>
                    </Container>
                </Box>
                <Container maxW="7xl">{props.children}</Container>
            </ChakraProvider>
        </div>
    )
}

export default Layout
