import React from 'react'
import FlipPage from 'react-flip-page'

const Book = () => {
    const bookRef = React.useRef()

    return (

        <>
        <div onClick={() => {
            bookRef.current.gotoNextPage()
        }}>
            Turn page
        </div>
        <FlipPage ref={bookRef}>
            <article>
                <h1>My awesome first article</h1>
                <p>My awesome first content</p>
            </article>
            <article>
                <h1>My wonderful second article</h1>
                <p>My wonderful second content</p>
            </article>
            <article>
                <h1>My excellent third article</h1>
                <p>My excellent third content</p>
            </article>
        </FlipPage>
        </>

    )
}

export default Book;