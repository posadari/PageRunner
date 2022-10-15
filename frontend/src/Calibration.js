import { useState } from 'react'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import WebGazer
 from './WebGazer';
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
    const [count1, setCount1] = useState(0);
    const classes = useStyles;

    return (
      <div className="App">
        {/* <WebGazer /> */}
        <div style={{marginTop: '10px'}}> 
            <Grid container spacing={10} className={classes.grid}>
                <Grid item xs={4}>
                    <div>
                        <button onClick={() => {setCount1(count1 + 1)}}>Take the Shot!</button>
                        {count1}
                    </div>
            
                </Grid>
                <Grid item xs={4}>
                <button onClick={() => {setCount1(count1 + 1)}}>Take the Shot!</button>
                    {count1}
                </Grid>
                <Grid item xs={4}>
                <button onClick={() => {setCount1(count1 + 1)}}>Take the Shot!</button>
                    {count1}
                </Grid>
                <Grid item xs={4}>
                <button onClick={() => {setCount1(count1 + 1)}}>Take the Shot!</button>
                    {count1}
                </Grid>
                <Grid item xs={4}>
                <button onClick={() => {setCount1(count1 + 1)}}>Take the Shot!</button>
                    {count1}
                </Grid>
                <Grid item xs={4}>
                <button onClick={() => {setCount1(count1 + 1)}}>Take the Shot!</button>
                    {count1}
                </Grid>
                <Grid item xs={4}>
                <button onClick={() => {setCount1(count1 + 1)}}>Take the Shot!</button>
                    {count1}
                </Grid>
                <Grid item xs={4}>
                <button onClick={() => {setCount1(count1 + 1)}}>Take the Shot!</button>
                    {count1}
                </Grid>
                <Grid item xs={4}>
                <button onClick={() => {setCount1(count1 + 1)}}>Take the Shot!</button>
                    {count1}
                </Grid>
            </Grid>
        </div>
        
        
      </div>
      
    );
  }
  
