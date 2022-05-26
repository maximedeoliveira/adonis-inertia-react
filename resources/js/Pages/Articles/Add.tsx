import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { ArrowLeft } from 'tabler-icons-react'
import Layout from '../../Layout'
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

const AddArticles = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        Inertia.post('/articles', { name, description })
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
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <FormControl>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="description">Description</FormLabel>
                        <Textarea
                            id="description"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormControl>
                    <Button type="submit" w="100%">
                        Valider
                    </Button>
                </VStack>
            </form>
        </>
    )
}

AddArticles.layout = (page) => <Layout children={page} />

export default AddArticles
