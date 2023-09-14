import { Box } from '@mui/material';
import {Switch} from '@mui/material'
import Accord from './accordion';
import { useState } from 'react';
import './App.css';
const Temp = () => {
    const [check,setChecked] = useState(false)
    function handleChange(e){
        setChecked(!check)
    }

    return ( 
        <div style={{display:'flex', justifyContent:'center',alignItems:'center',wdith:"100vw",height:"100vh"}}>
            <Box sx={{width: 700, height: 600}}>
                <Accord title="Accordion 1" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum eaque natus pariatur"/>
                <Accord title="Accordion 2" body={<Switch checked={check} onChange={(e)=>handleChange(e)}></Switch>}/>
                <div className="collapsible" id='yellow' style={{maxHeight: check? "20em" : "5em"}}><h1>Hello World</h1></div>
            </Box>
            

        </div>
     );
}
 
export default Temp;