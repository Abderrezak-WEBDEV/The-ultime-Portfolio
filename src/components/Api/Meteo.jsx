import React from 'react';
import "./Api.css";

class Meteo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://proxypage1.p.rapidapi.com/v1/tier2?type=HTTP&limit=100&country=US")
        .then(res => res.json())
        .then( res => console.log('resultat',res)
        //   (result) => {
        //     this.setState({
        //       isLoaded: true,
        //       items: result.items,
        //       names: result.names
        //     });
        //   },
        //   // Note: it's important to handle errors here
        //   // instead of a catch() block so that we don't swallow
        //   // exceptions from actual bugs in components.
        //   (error) => {
        //     this.setState({
        //       isLoaded: true,
        //       error
        //     });
        //   }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    }
  }
export default Meteo;