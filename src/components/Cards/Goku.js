import React from 'react';
import Box from "../core/Box";
function Goku(){
    let Cards = [{name:"Goku", category:"animation", value:1, id:1, img: "https://images-na.ssl-images-amazon.com/images/I/51KJqhhcMZL._AC_SL1076_.jpg"    }]


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
export default Goku;