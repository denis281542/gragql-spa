import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { ArrowIcon } from './features/item/ArrowIcon';
import { ItemProps } from './features/item/ItemProps';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
});


const GET_ALL_ITEMS = gql`
  query ($search: String) {
    Page {
      media(search: $search) {
        id
        title {
          english
        }
        
        stats {
          statusDistribution {
            status
            amount
          }
        }
      }
    }
  }
`;

const ItemsList = ({data}) => {
  return( data.Page.media.map((media, id) => 
    <div className="item" key={id}>
      <div className="item__title">
        <h3>{media.title.english}</h3>
        <a href="#">
            <ArrowIcon />
        </a>
      </div>

      {media.stats.statusDistribution.map((i, idx) => 
        <div className="item__props" key={idx}>
          <ItemProps
            title="status"
            prop={i.status}
          />
          <ItemProps
            title="amount"
            prop={i.amount}
          />
        </div>)}
  </div>)
  )
}


function ExchangeRates() {
  const { loading, error, data } = useQuery(GET_ALL_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>; 

  return(<ItemsList data={data}/>)
}







const Input = () => {
  const [queryInput, setQuery] = useState('')

  const query = `
    query ($search: String) {
      Page {
        media(search: $search) {
          id
          title {
            english
          }
          
          stats {
            statusDistribution {
              status
              amount
            }
          }
        }
      }
    }
  `;
  

  var variables = {
      search: queryInput
  };

  var url = 'https://graphql.anilist.co',
  options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  };

  function handleResponse(response) {
    return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json);
    });
  }

  function handleData(data) {
    console.log(data);
    return data
  }

  function handleError(error) {
    alert('Error, check console');
    console.error(error);
  }

  return(<input 
    onChange={e => setQuery(e.target.value)}
    onKeyPress={e => {
      if(e.code === "Enter" || e.code === "NumpadEnter") {
        fetch(url, options).then(handleResponse) 
                            .then(handleData) 
                          //  .then(handleError)
      }
    }}
    value={queryInput}
  />)
}


ReactDOM.render(
  <ApolloProvider client={client}>

    <Input />

    <div className="item__inner">
      <header>
          <h1 className="item__header">SpaceX Ships</h1>
      </header>
      <ul className="item__list">
        <ExchangeRates />
      </ul>
    </div>
  </ApolloProvider>,
  document.getElementById('root')
);

