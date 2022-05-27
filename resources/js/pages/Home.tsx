import React from 'react'
import { Inertia } from '@inertiajs/inertia'

const Home = () => {
    const handleClick = () => {
        Inertia.visit('/test')
    }

    return (
        <>
            <p>Hello from React</p>
            <a onClick={handleClick}>Go to test page</a>
        </>
    )
}

export default Home
