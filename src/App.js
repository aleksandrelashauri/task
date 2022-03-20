import './App.css';
import Amplify from 'aws-amplify'
import awsconfing from './aws-exports'
import {AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react' 
import SearchBar from "./Weather/SearchBar";
import React, {useState} from "react";
import CurrentWeather from "./Weather/CurrentWeather";

Amplify.configure(awsconfing)

function App() {
  const [query, setQuery] = useState('Tbilisi');

  return (
    <div className="App">
      <header className="App-header">
      <AmplifySignOut />
      <div>
        <header>
      <SearchBar search={query} onSubmit={(newQuery)=>{setQuery(newQuery)}} />
        </header>
        <div className='container'>
            <div>
            <div className='current'>
                <CurrentWeather search={query} />
            </div>  
            </div>
        </div>
    </div>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
