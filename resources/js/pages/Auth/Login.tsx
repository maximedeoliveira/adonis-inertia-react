import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Input,
    VStack,
    Text,
} from '@chakra-ui/react'
import { Inertia } from '@inertiajs/inertia'
import Layout from '../../layout'

const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit } = useForm()

    const submit = (data) => {
        setIsLoading(true)
        Inertia.post('/login', data)
    }

    return (
        <>
            <HStack spacing={4} mb={8}>
                <Text fontWeight="bold" fontSize="4xl">
                    Connexion
                </Text>
            </HStack>
            <form onSubmit={handleSubmit(submit)}>
                <VStack spacing={4}>
                    <FormControl>
                        <FormLabel htmlFor="email">Identifiant</FormLabel>
                        <Input id="email" {...register('email')} />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password">Mot de passe</FormLabel>
                        <Input
                            id="password"
                            type="password"
                            {...register('password')}
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        w="100%"
                        colorScheme="blue"
                        isLoading={isLoading}
                        isDisabled={isLoading}
                    >
                        Valider
                    </Button>
                </VStack>
            </form>
        </>
    )
}

Login.layout = (page) => <Layout children={page} />

export default Login
