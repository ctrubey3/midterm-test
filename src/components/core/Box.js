import React from 'react';
function Box(props){





    return(

        <div >
            <h3>Name:{props.name}</h3>
            <h3>Category:{props.category}</h3>
            <h3> Value:{props.value}</h3>
            <h3>id:{props.id}</h3>
            <h3>{props.img}</h3>
        </div>



    )
}

// way to export box function to other files
export default Box;