import React from 'react';
import Box from "./Box";
function Animation () {

    let all =[Box.props]


    let buttons = all.map((dt,idx)=>
        <Box key={idx} dt ={dt}/>


    );

    return (
        <div className="App">
            {buttons}
        </div>)

}

export default Animation;