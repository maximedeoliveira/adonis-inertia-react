import React, { useState } from 'react'
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
import { ArrowLeft } from 'tabler-icons-react'
import { useForm } from 'react-hook-form'
import { Inertia } from '@inertiajs/inertia'
import Layout from '../../layout'
import { Article } from '@/types/article'

type EditArticleProps = {
    article: Article
}

const EditArticle = (props: EditArticleProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit } = useForm({ defaultValues: props.article })

    const submit = (data) => {
        setIsLoading(true)
        Inertia.patch(`/articles/${props.article.id}`, data)
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

EditArticle.layout = (page) => <Layout children={page} />

export default EditArticle
