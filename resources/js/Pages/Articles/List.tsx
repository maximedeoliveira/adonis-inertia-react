import React from 'react'
import { Inertia } from '@inertiajs/inertia'
import Layout from '../../Layout'
import { Box, VStack, Text, Button, HStack, Spacer } from '@chakra-ui/react'

const ListArticles = (props) => {
    return (
        <>
            <HStack spacing={4} mb={8}>
                <Text fontWeight="bold" fontSize="2xl">
                    Articles
                </Text>
                <Spacer />
                <Button onClick={() => Inertia.visit('/articles/create')}>
                    Ajouter un article
                </Button>
            </HStack>
            <VStack align="left" spacing={6}>
                {props.articles.length === 0 && <p>Aucun articles</p>}
                {props.articles.map((article) => (
                    <Box key={article.id}>
                        <Text>{article.name}</Text>
                        <Text>{article.description}</Text>
                    </Box>
                ))}
            </VStack>
        </>
    )
}

ListArticles.layout = (page) => <Layout children={page} />

export default ListArticles
