import React, { useRef, useState } from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    HStack,
    Spacer,
    Text,
    useDisclosure,
    VStack,
} from '@chakra-ui/react'
import Layout from '../../layout'
import { InertiaLink } from '@inertiajs/inertia-react'
import { Article } from '@/types/article'
import { Inertia } from '@inertiajs/inertia'
import { User } from '@/types/user'

type ShowArticleProps = {
    article: Article
    user?: User
}

const ShowArticle = (props: ShowArticleProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef(null)

    console.log(props.article)

    const handleRemove = () => {
        setIsLoading(true)
        Inertia.delete(`/articles/${props.article.id}`)
    }

    if (!props.article) {
        return <Text>Article not found</Text>
    }

    return (
        <>
            <VStack align="left" spacing={6}>
                <HStack>
                    <Text fontWeight="bold" fontSize="4xl">
                        {props.article.name}
                    </Text>
                    <Spacer />
                    {props?.user.id === props.article.user.id && (
                        <>
                            <InertiaLink
                                href={`/articles/${props.article.id}/edit`}
                            >
                                <Button colorScheme="blue">Modifer</Button>
                            </InertiaLink>
                            <Button colorScheme="red" onClick={onOpen}>
                                Supprimer
                            </Button>
                        </>
                    )}
                </HStack>
                <Text>{props.article.description}</Text>
            </VStack>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Supprimer un article
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            ??tes-vous s??r ? La suppression est d??finitive.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button
                                ref={cancelRef}
                                onClick={onClose}
                                isDisabled={isLoading}
                            >
                                Annuler
                            </Button>
                            <Button
                                colorScheme="red"
                                onClick={handleRemove}
                                ml={3}
                                isLoading={isLoading}
                                isDisabled={isLoading}
                            >
                                Supprimer
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

ShowArticle.layout = (page) => <Layout children={page} />

export default ShowArticle
