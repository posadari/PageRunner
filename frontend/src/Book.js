import React from 'react'
import HTMLFlipBook from 'react-pageflip';

const Book = () => {
    const bookRef = React.useRef()

    const Page = React.forwardRef((props, ref) => {
        return (
            <div ref={ref}
                style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/paperboard-yellow-texture.jpg'})`,}}
            >
                <h1>Page Header</h1>
                <p>{props.children}</p>
                <p>Page number: {props.number}</p>
            </div>
        );
    });

    // const Page = ({text}) => {
    //     return (
    //         <HTMLFlipBook width={300} height={500}>

    //         <div style={{ 
    //             backgroundImage: `url(${process.env.PUBLIC_URL + '/paperboard-yellow-texture.jpg'})`,
    //             backgroundSize: 'cover',
    //             width: '100%',
    //             height: '100%'
    //             }}>
    //                 {text}
    //         </div>
    //         </HTMLFlipBook>

    //     )
    // }

    return (

        <>
        <div onClick={() => {
            bookRef.current.pageFlip()
        }}>
            Turn page
        </div>
        {/* <HTMLFlipBook ref={bookRef} orientation="horizontal" style={{width: 1900, height: 1000}}>
            <Page text="hyeee" />
            <Page text="1sdgasgasdgsadgasgduiahsd;goihas;dogihas;dogiha;sodiasdgsadgasg" />
            <Page text="2" />

        </HTMLFlipBook> */}
                <HTMLFlipBook width={300} height={500}>
            <Page number="1">Page text</Page>
            <Page number="2">Page text</Page>
            <Page number="3">Page text</Page>
            <Page number="4">Page text</Page>
        </HTMLFlipBook>
        </>

    )
}

export default Book;