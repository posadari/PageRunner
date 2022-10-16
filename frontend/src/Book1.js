import React, {useState} from 'react'
import HTMLFlipBook from 'react-pageflip';
import './book.css';
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import monkeypaw from "./monkeyspaw.pdf";
import Calibration from './Calibration'
import frogPrincePDF from "./frogprince.pdf";
import { CircularProgress } from '@mui/material';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const width = 400;

const Book2 = () => {
    const bookRef1 = React.useRef()
    const bookRef2 = React.useRef()
    const bookisSwapped = React.useRef(true)
    const [toggle, setToggle] = useState(true)
    const [bookSwap, setBookSwap] = useState(true);

    const leftCutoff = 350;
    const rightCutoff = 1200;

    const leftmostCutoff = 350;
    const bottomCutoff = 350;

    let lookDirection = null;
    let startLookTime = Number.POSITIVE_INFINITY;

    const webgazer = window.webgazer;
    console.log(webgazer);
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

        const bookRef = bookisSwapped ? bookRef2 : bookRef1;

        if(startLookTime + 1000 < elapsedTime && bookRef.current != null) {
            if(lookDirection === 'LEFT'){
                bookRef.current.pageFlip().flipPrev();
            } else if(lookDirection === 'RIGHT') {
                bookRef.current.pageFlip().flipNext();
            } else {
                console.log('bottom')
                setBookSwap(!bookSwap)
                bookisSwapped.current = !bookisSwapped;
                webgazer.pause()
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
                    <>
                <div style={{opacity: bookSwap ? 1 : 0}}>
                <Document file={monkeypaw} loading={<CircularProgress />} onloadeddata={()=> {webgazer.resume()}}>
                    <HTMLFlipBook width={width} height={560} ref={bookRef1} showCover={true}>
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
                </div>

                <div style={{opacity: bookSwap ? 0 : 1}}>
                <Document file={frogPrincePDF}>
                    <HTMLFlipBook width={width} height={525} ref={bookRef2}>
                        <Page number={1}>Page text</Page>
                        <Page number={2}>Page text</Page>
                        <Page number={3}>Page text</Page>
                        <Page number={4}>Page text</Page>
                        
                    </HTMLFlipBook>
                </Document>
                </div>
                </>

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