import React from 'react'
import { Box, ChakraProvider, Container, HStack, Text } from '@chakra-ui/react'
import { InertiaLink } from '@inertiajs/inertia-react'

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
                            <InertiaLink href="/articles">
                                <Text color="white" cursor="pointer">
                                    Articles
                                </Text>
                            </InertiaLink>
                        </HStack>
                    </Container>
                </Box>
                <Container maxW="7xl">{props.children}</Container>
            </ChakraProvider>
        </div>
    )
}

export default Layout
