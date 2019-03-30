import React from 'react';
import CountryFile from '../countries.json';
import { NavLink } from 'react-router-dom';

function CountryDetail(props) {
  const { params } = props.match;

  const getCountry = idCountry => { 
    return CountryFile.filter(Country => {
      return Country.cca3 === idCountry 
      })
    }
  
  const foundCountry = getCountry(params.id)[0];

  console.log("Found country: ", foundCountry);

  return (
    <div className="col-7">
      <h1>{foundCountry.name.official}</h1>
      <table className="table">
        <thead />
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              
              <ul>
                {foundCountry.borders.map((border, index) => (
                  <li key={`border-${index}`}>
                    <NavLink to={`/country/${border}`}>{border}</NavLink>
                  </li>
                ))}
              </ul>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetail;
