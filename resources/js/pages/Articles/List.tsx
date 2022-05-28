import React from 'react'
import { Inertia } from '@inertiajs/inertia'
import Layout from '../../layout'
import { Box, VStack, Text, Button, HStack, Spacer } from '@chakra-ui/react'
import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import { Article } from '@/types/article'
import { User } from '@/types/user'

type ListArticlesProps = {
    articles: Article[]
    user?: User
}

const ListArticles = (props: ListArticlesProps) => {
    const formatCreatedAt = (str: string): string => {
        return new Intl.DateTimeFormat('fr-FR').format(new Date(str))
    }

    return (
        <>
            <HStack spacing={4} mb={8}>
                <Text fontWeight="bold" fontSize="4xl">
                    Articles
                </Text>
                <Spacer />
                {props.user && (
                    <Button
                        colorScheme="blue"
                        onClick={() => Inertia.visit('/articles/create')}
                    >
                        Ajouter un article
                    </Button>
                )}
            </HStack>
            <VStack align="left" spacing={8}>
                {props.articles.length === 0 && <p>Aucun articles</p>}
                {props.articles.map((article) => {
                    return (
                        <VStack align="left" spacing={3} key={article.id}>
                            <VStack align="left" spacing={1}>
                                <InertiaLink href={`/articles/${article.id}`}>
                                    <Text fontWeight="bold" fontSize="2xl">
                                        {article.name}
                                    </Text>
                                </InertiaLink>
                                <Text fontSize="md" colorScheme="blue">
                                    Publié par {article.user.email}, le{' '}
                                    {formatCreatedAt(article.created_at)}
                                </Text>
                            </VStack>
                            <Text>{article.description.slice(0, 250)}...</Text>
                        </VStack>
                    )
                })}
            </VStack>
        </>
    )
}

ListArticles.layout = (page) => <Layout children={page} />

export default ListArticles
