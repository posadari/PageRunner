import React from 'react'
import HTMLFlipBook from 'react-pageflip';
import './book.css';
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import frogPrincePDF from "./frogprince.pdf";
import WebGazer from './WebGazer';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const width = 400;

const Book = () => {
    const bookRef = React.useRef()

    const Page = React.forwardRef((props, ref) => {
        return (
            <div ref={ref}
                className="page"
                >
                <ReactPdfPage pageNumber={props.number} width={width} />
            </div>
        );
    });

    return (
        <div style={{marginLeft: '50%'}}>
        {/* <WebGazer /> */}
        <div onClick={() => {
            bookRef.current.pageFlip().flipNext();
        }}>
            Turn page
        </div>
        <Document file={frogPrincePDF}>
            <HTMLFlipBook width={width} height={525} ref={bookRef}>
                <Page number={1}>Page text</Page>
                <Page number={2}>Page text</Page>
                <Page number={3}>Page text</Page>
                <Page number={4}>Page text</Page>
                
            </HTMLFlipBook>
        </Document>
        </div>

    )
}

export default Book;