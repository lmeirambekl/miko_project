import React from "react";
import { Link } from "react-router-dom";
import "./Market.css";

function Market() {
    
    return (
        <body>
<ul className="catalog">
<li>
<Link to="/drinks">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNPoMAV3JPgTP2erqkiAqt1V3VXz7v-MgUQ&usqp=CAU"
          alt="Drinks"
        />
        <h1>Drinks</h1>
      </Link>
</li>
<li>
<Link to="/gastronomy">
        <img
          src="https://torzhokmarket.ru/wp-content/uploads/2019/08/1F1A4626-2.jpg"
          alt="Gastronomy"
        />
        <h1>Gastronomy</h1>
      </Link>
</li>
<li>
<Link to="/grocery">
        <img
          src="https://vz.ua/uploads/news/2022/02/21/871e5a735717d174fd00953570dd3f4540d675c3.jpg"
          alt="Grocery"
        />
        <h1>Grocery</h1>
      </Link>
</li>
<li>
<Link to="/non">
        <img
          src="https://mplast.by/wp-content/uploads/2022/01/bitovaya-himiya-001.jpg"
          alt="Non-Food"
        />
        <h1>Non-Food</h1>
      </Link>
</li>
<li>
<Link to="/vafd">
        <img
          src="https://ss.sport-express.ru/userfiles/materials/181/1812257/large.jpg"
          alt="VAFD"
        />
        <h1>VAFD</h1>
      </Link>
</li>
</ul>
</body>
    );
  }
  
  export default Market;
  