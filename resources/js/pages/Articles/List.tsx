import React from 'react'
import { Inertia } from '@inertiajs/inertia'
import Layout from '../../layout'
import { Box, VStack, Text, Button, HStack, Spacer } from '@chakra-ui/react'
import { InertiaLink } from '@inertiajs/inertia-react'
import { Article } from '@/types/article'

type ListArticlesProps = {
    articles: Article[]
}

const ListArticles = (props: ListArticlesProps) => {
    return (
        <>
            <HStack spacing={4} mb={8}>
                <Text fontWeight="bold" fontSize="4xl">
                    Articles
                </Text>
                <Spacer />
                <Button
                    colorScheme="blue"
                    onClick={() => Inertia.visit('/articles/create')}
                >
                    Ajouter un article
                </Button>
            </HStack>
            <VStack align="left" spacing={8}>
                {props.articles.length === 0 && <p>Aucun articles</p>}
                {props.articles.map((article) => (
                    <VStack align="left" spacing={3} key={article.id}>
                        <InertiaLink href={`/articles/${article.id}`}>
                            <Text fontWeight="bold" fontSize="2xl">
                                {article.name}
                            </Text>
                        </InertiaLink>
                        <Text>{article.description.slice(0, 250)}...</Text>
                    </VStack>
                ))}
            </VStack>
        </>
    )
}

ListArticles.layout = (page) => <Layout children={page} />

export default ListArticles
