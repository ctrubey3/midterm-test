import React from 'react';
import Box from "./Box";
import {Link} from "react-router-dom";
function All (props) {

        let Cards = [   {name:"Goku", category:"animation", value:1, id:1, img: "https://images-na.ssl-images-amazon.com/images/I/51KJqhhcMZL._AC_SL1076_.jpg"    },
                {name:"Vegeta", category:"animation", value:2, id:2,       img: "https://images-na.ssl-images-amazon.com/images/I/514OOd8O5hL._AC_SX425_.jpg"},
                {name:"Vegito",        category:"animation",        value:5,  id:3,      img: "https://i5.walmartimages.com/asr/9d0d9ea9-279c-49c9-b263-ecc42d8a30c7_1.9e55add9a48eb687cadb0527a27ad48f.jpeg"    },
                {name:"Deku",        category:"animation",        value:2,   id:4,     img: "https://images-na.ssl-images-amazon.com/images/I/51IZqW3L05L._AC_SX425_.jpg"    },
                {name:"Kazuya",        category:"games",        value:3,   id:5,     img: "https://cdn.shopify.com/s/files/1/0803/3763/products/Tekken_kazuya_POP-mindzai-1000-2.jpg?v=1571567721"    },
                {name:"Cortex",        category:"games",        value:2,    id:6,    img: "https://www.characterstation.com/eshop/13567-large_default/figur-funko-pop-games-crash-bandicoot-neo-cortex-rare-geneva-switzerland-online-shop.jpg"    },
                {name:"Sonic",        category:"games",        value:4,    id:7,    img: "https://images-na.ssl-images-amazon.com/images/I/41x7KV15nsL._AC_SY450_.jpg"    },
                {name:"McCree",        category:"games",        value:3,    id:8,    img: "https://geekvault.co.uk/wp-content/uploads/2019/07/Overwatch_FPV_USAMcCree01.jpg"    },
                {name:"Michael Scott",        category:"television", value:3, id:9, img: "https://media.gamestop.com/i/gamestop/10173271/POP-Television-The-Office-Michael-Scott?$pdp$"},
                {name:"Dwight",category:"television",        value:1,    id:10,    img: "https://images-na.ssl-images-amazon.com/images/I/518oRvfXItL._AC_SX425_.jpg"    },
                {name:"Jim",        category:"television",        value:2,  id:11,      img: "https://images-na.ssl-images-amazon.com/images/I/41vdN0vxvrL._AC_.jpg"    },
                {name:"Pam",        category:"television",        value:1,   id:12,     img: "https://images-na.ssl-images-amazon.com/images/I/31R5tyCdCnL._AC_.jpg"    }]


        let buttons = Cards.map((df,id)=>
            <Box key={id} dt ={df}/>
        );



        return(


        <div >

            <Box key={props.id}>{Cards.map(id => <h4>{buttons.push(id)}</h4>)}</Box>
            <Box key={props.id}>{Cards.map(id => <h4>{buttons.push(id)}</h4>)}</Box>
            <Link  className= "App-header" to={"/Goku/"}> <Box key={props.id}>1</Box></Link>
            <Link  className= "App-header" to={"/Goku/"}> <Box key={props.id}>2</Box></Link>
            <Link  className= "App-header" to={"/Goku/"}> <Box key={props.id}>3</Box></Link>
            <Link  className= "App-header" to={"/Goku/"}> <Box key={props.id}>4</Box></Link>
            <Link  className= "App-header" to={"/Goku/"}> <Box key={props.id}>5</Box></Link>
            <Link  className= "App-header" to={"/Goku/"}> <Box key={props.id}>6</Box></Link>
            <Link  className= "App-header" to={"/Goku/"}> <Box key={props.id}>7</Box></Link>
            <Link  className= "App-header" to={"/Goku/"}> <Box key={props.id}>8</Box></Link>
            <Link  className= "App-header" to={"/Goku/"}> <Box key={props.id}>9</Box></Link>
            <Link  className= "App-header" to={"/Goku/"}> <Box key={props.id}>10</Box></Link>

        </div>

    )
}

export default All;