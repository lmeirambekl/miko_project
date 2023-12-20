import React, { Component } from 'react';
import "./Drinks.css";

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
        .then(res => res.json())
        .then(
            (result) =>{
                this.setState({
                    isLoaded: true,
                    items: result.drinks
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
              <div className='drinkk'>
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                         <img src={item.strDrinkThumb} alt={item.strDrink} />
                         {item.strDrink}
                        <span>
                          <h1>Price:
                          {item.idDrink}$</h1>
                          </span>
                        </li>
                    ))}
                </ul>
              </div>
            );
        }
    }
}

export default MyComponent;
