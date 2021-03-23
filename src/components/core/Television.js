import React from 'react';
import Box from "./Box";
function Television () {

    let all =[Box.props]


    let buttons = all.map((dt,idx)=>
        <Box key={idx} dt ={dt}/>


    );

    return (
        <div className="App">
            {buttons}
        </div>)

}

export default Television;