import { useEffect, useState } from 'react'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import WebGazer
 from './WebGazer';
import './calibration.css'

const useStyles = makeStyles((theme) => ({
    grid: {
      width: "50%",
      margin: "0px",
      marginTop: '10px'
    }
  }));

  const button_style = {
    
  }

  export default function App() {

    const [count, setCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const doSetCount = (index) => {
        const newCount = count;
        newCount[index]++;
        setCount([...newCount]);
    }

    const classes = useStyles;

    return (
      <div className="App">
        <WebGazer />
        <div style={{alignSelf: 'center'}}> 
            <Grid container spacing={10} className={classes.grid}>
                <Grid item xs={4}>
                    <div className='buffer'>
                        <div id="circle" style={{opacity: count[0]/9 * 1 + .1, backgroundColor: count[0]/9 > 1 ? 'green' : 'red' }} onClick={() => {doSetCount(0)}}/ >
                    </div>
            
                </Grid>
                <Grid item xs={4}>
                    <div className='buffer'>
                        <div id="circle" style={{opacity: count[1]/9 * 1 + .1, backgroundColor: count[1]/9 > 1 ? 'green' : 'red' }} onClick={() => {doSetCount(1)}}/ >
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='buffer'>
                        <div id="circle" style={{opacity: count[2]/9 * 1 + .1, backgroundColor: count[2]/9 > 1 ? 'green' : 'red' }} onClick={() => {doSetCount(2)}}/ >
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='buffer'>
                        <div id="circle" style={{opacity: count[3]/9 * 1 + .1, backgroundColor: count[3]/9 > 1 ? 'green' : 'red' }} onClick={() => {doSetCount(3)}}/ >
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='buffer'>
                        <div id="circle" style={{opacity: count[4]/9 * 1 + .1, backgroundColor: count[4]/9 > 1 ? 'green' : 'red' }} onClick={() => {doSetCount(4)}}/ >
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='buffer'>
                        <div id="circle" style={{opacity: count[5]/9 * 1 + .1, backgroundColor: count[5]/9 > 1 ? 'green' : 'red' }} onClick={() => {doSetCount(5)}}/ >
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='buffer'>
                        <div id="circle" style={{opacity: count[6]/9 * 1 + .1, backgroundColor: count[6]/9 > 1 ? 'green' : 'red' }} onClick={() => {doSetCount(6)}}/ >
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='buffer'>
                        <div id="circle" style={{opacity: count[7]/9 * 1 + .1, backgroundColor: count[7]/9 > 1 ? 'green' : 'red' }} onClick={() => {doSetCount(7)}}/ >
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='buffer'>
                        <div id="circle" style={{opacity: count[8]/9 * 1 + .1, backgroundColor: count[8]/9 > 1 ? 'green' : 'red' }} onClick={() => {doSetCount(8)}}/ >
                    </div>
                </Grid>
            </Grid>
        </div>
        
        
      </div>
      
    );
  }
  
