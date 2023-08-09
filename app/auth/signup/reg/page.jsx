"use client"
import React, { useId } from 'react'
import { useState, useEffect } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
} from '@chakra-ui/react'
import { Country, State, City }  from 'country-state-city';


const page = () => {

  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('');

  const allCountries = Country.getAllCountries()
  const allStates = State.getStatesOfCountry(selectedCountry)
  return (
    <div className=''>
      <FormControl>
        <div className='flex'>
          <FormLabel>First Name</FormLabel>
          <Input type='text'/>
          <FormLabel>Last Name</FormLabel>
          <Input type='text'/>
        </div>
        <Select 
          
          placeholder='select country' 
          onChange={(e) => {
            // handleCountryChange(e)
            setSelectedCountry(e.target.value)
            setCountries(e.target.value)
          }}
          >
            {
              allCountries.map(country => {
                return (
                  <option key={country.name} value={country.isoCode}>
                    {country.name}
                  </option>
                )

              })
            }
          </Select>

        <Select 
          placeholder="Select State" 
          onChange={e => setStates(e.target.value)}
          >
            {allStates.map(city => {
              return(
                <option key={city.isoCode} value={city.name}>

                  {city.name}
                </option>
              )
            })}
          </Select>
      </FormControl>

      {/* <form className='mt-32'>
        <select placeholder='select choice'>
          <option>Home</option>
          <option>away</option>
          <option>abroad</option>
          {countries.map(country => {
            return (

            <option key={country} value={country}>
              {console.log(country)}
              {country}
            </option>
            )
          })}

        </select>
      </form> */}
      {
        allCountries.map(country => {
          // console.log(country.name)
        })
      }
    </div>
  )
}

export default page