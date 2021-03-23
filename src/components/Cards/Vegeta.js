import React from 'react';
import Box from "../core/Box";
function Vegeta(){
    let Cards = [{name:"Vegeta", category:"animation", value:2, id:2,       img: "https://images-na.ssl-images-amazon.com/images/I/514OOd8O5hL._AC_SX425_.jpg"}
    ]


    let buttons = Cards.map((df,id)=>
        <Box key={id} dt ={df}/>

    );
    return(

        <div className="Contacts">
            {buttons}

        </div>



    )
}

// way to export box function to other files
export default Vegeta;