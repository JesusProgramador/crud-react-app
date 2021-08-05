import React from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/Heroes'
import { HeroeCard } from '../heroes/HeroeCard';
import { useForm } from '../hooks/useForm';


export const SearchPage = ({ history }) => {

  const location = useLocation();
  const { q = '' } =  queryString.parse( location.search );

  const [ formValues, handleInputChange ] = useForm({
    searchText: q
  });

  const { searchText } = formValues;

  const heroesFiltered = heroes;

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${ searchText }`);
  }

  return (
    <div>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={ handleSearch }>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ handleInputChange }
            />

            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            heroesFiltered.map( hero => (
              <HeroeCard
                key={ hero.id }
                { ...hero }
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
