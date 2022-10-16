import React, {useState} from 'react'
import HTMLFlipBook from 'react-pageflip';
import './book.css';
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import monkeypaw from "./monkeyspaw.pdf";
import Calibration from './Calibration'
import frogPrincePDF from "./frogprince.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const width = 400;

const Book2 = () => {
    const bookRef = React.useRef()
    const [toggle, setToggle] = useState(true)
    const [bookSwap, setBookSwap] = useState(true);

    const leftCutoff = 350;
    const rightCutoff = 1200;

    const leftmostCutoff = 350;
    const bottomCutoff = 350;

    let lookDirection = null;
    let startLookTime = Number.POSITIVE_INFINITY;


    const webgazer = window.webgazer;

    webgazer.setGazeListener(function(data, elapsedTime) {
        if (data == null) {
            return;
        }
        var xprediction = data.x; //these x coordinates are relative to the viewport
        // element.current = document.elementFromPoint(xprediction, yprediction)
        if(xprediction < leftCutoff){
            if(xprediction < leftmostCutoff && data.y > bottomCutoff){
                console.log('in bottom')
                startLookTime = elapsedTime;
                lookDirection = 'BOTTOM'
            } else {

                startLookTime = elapsedTime;
                lookDirection = 'LEFT'
            }
        } else if(xprediction > rightCutoff){
            startLookTime = elapsedTime;
            lookDirection = 'RIGHT'
        }

        console.log(data.y)

        if(startLookTime < elapsedTime && bookRef.current != null) {
            if(lookDirection === 'LEFT'){
                bookRef.current.pageFlip().flipPrev();
            } else if(lookDirection === 'RIGHT') {
                bookRef.current.pageFlip().flipNext();
            } else {
                console.log('bottom')
                setBookSwap(!bookSwap)
            }
            lookDirection = null;
            startLookTime = Number.POSITIVE_INFINITY
        }

        // console.log(elapsedTime); //elapsed time is based on time since begin was called
    }).begin();

    if(toggle){
        webgazer.showVideoPreview(true).showPredictionPoints(true)
    } else {
        webgazer.showVideoPreview(true).showPredictionPoints(true)
    }

    const Page = React.forwardRef((props, ref) => {
        return (
            <div ref={ref}
                className="page"
                >
                <ReactPdfPage pageNumber={props.number} width={width} height={510}/>
            </div>
        );
    });

    return (
        <>
        {toggle ? <Calibration /> : 
        <div className='everything'>
            <div className='desk'/>
            <img className='coffee' src="https://cdn.discordapp.com/attachments/708879033194119250/1031079877295734814/coffee-12663.png" />
            <div id="turner" className='leftButton' ></div>
            <div id="turner" className='rightButton' ></div>
            <div id="covertwo" style={{marginLeft: '30%'}}>
                {/* <WebGazer /> */}
                {/* <div onClick={() => {
                    bookRef.current.pageFlip().flipNext();
                }}>
                    Turn page
                </div> */}


                {
                    bookSwap ? 
                <Document file={monkeypaw}>
                    <HTMLFlipBook width={width} height={560} ref={bookRef} showCover={true}>
                        <Page number={1}>Page text</Page>
                        <Page number={2}>Page text</Page>
                        <Page number={3}>Page text</Page>
                        <Page number={4}>Page text</Page>
                        <Page number={5}>Page text</Page>
                        <Page number={6}>Page text</Page>
                        <Page number={7}>Page text</Page>
                        <Page number={8}>Page text</Page>
                        <Page number={9}>Page text</Page>
                    </HTMLFlipBook>
                </Document>
            :
                <Document file={frogPrincePDF}>
                    <HTMLFlipBook width={width} height={525} ref={bookRef}>
                        <Page number={1}>Page text</Page>
                        <Page number={2}>Page text</Page>
                        <Page number={3}>Page text</Page>
                        <Page number={4}>Page text</Page>
                        
                    </HTMLFlipBook>
                </Document>
            }
            </div>
            <div className='cornerbook' onClick={() => {setBookSwap(!bookSwap)}}></div>
        </div>


}

    <button className='calibrater' onClick={() => {setToggle(!toggle)}}>Calibrate</button>

        </>

    )
}

export default Book2;