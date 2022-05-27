import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { ArrowLeft } from 'tabler-icons-react'
import Layout from '../../layout'
import {
    Button,
    FormControl,
    FormLabel,
    HStack,
    IconButton,
    Input,
    Text,
    Textarea,
    VStack,
} from '@chakra-ui/react'
import { InertiaLink } from '@inertiajs/inertia-react'
import { useForm } from 'react-hook-form'

const AddArticles = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit } = useForm()

    const submit = (data) => {
        setIsLoading(true)
        Inertia.post('/articles', data)
    }

    return (
        <>
            <HStack spacing={4} mb={8}>
                <InertiaLink href="/articles">
                    <IconButton
                        aria-label="Retour en arrière"
                        icon={<ArrowLeft />}
                    />
                </InertiaLink>
                <Text fontWeight="bold" fontSize="2xl">
                    Ajouter un article
                </Text>
            </HStack>
            <form onSubmit={handleSubmit(submit)}>
                <VStack spacing={4}>
                    <FormControl>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input id="name" {...register('name')} />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="description">Description</FormLabel>
                        <Textarea
                            id="description"
                            {...register('description')}
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

AddArticles.layout = (page) => <Layout children={page} />

export default AddArticles
