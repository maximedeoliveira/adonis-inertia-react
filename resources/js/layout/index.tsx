import React from 'react'
import {
    Box,
    ChakraProvider,
    Container,
    HStack,
    Spacer,
    Text,
    Flex,
    Button,
} from '@chakra-ui/react'
import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

const Layout = (props) => {
    const { user } = usePage().props

    return (
        <div>
            <ChakraProvider>
                <Box bg="gray.800" px={2} py={4} mb={8}>
                    <Container maxW="7xl">
                        <Flex experimental_spaceX={6} alignItems="center">
                            <Text color="white" fontWeight="bold">
                                adonis-inertia-react
                            </Text>
                            <HStack flex={1}>
                                <InertiaLink href="/articles">
                                    <Text color="white" cursor="pointer">
                                        Articles
                                    </Text>
                                </InertiaLink>
                                <Spacer />
                                {user ? (
                                    <Button
                                        colorScheme="blue"
                                        cursor="pointer"
                                        onClick={() => Inertia.get('/logout')}
                                    >
                                        Déconnexion
                                    </Button>
                                ) : (
                                    <>
                                        <InertiaLink href="/register">
                                            <Button
                                                variant="outline"
                                                cursor="pointer"
                                                color="white"
                                                _hover={{
                                                    bg: 'transparent',
                                                    opacity: '60%',
                                                }}
                                            >
                                                Inscription
                                            </Button>
                                        </InertiaLink>
                                        <InertiaLink href="/login">
                                            <Button
                                                colorScheme="blue"
                                                cursor="pointer"
                                            >
                                                Connexion
                                            </Button>
                                        </InertiaLink>
                                    </>
                                )}
                            </HStack>
                        </Flex>
                    </Container>
                </Box>
                <Container maxW="7xl">{props.children}</Container>
            </ChakraProvider>
        </div>
    )
}

export default Layout
