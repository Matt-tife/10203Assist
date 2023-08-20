"use client"
import React, { useId } from 'react'
import { useState, useEffect } from 'react'
import { Country, State, City }  from 'country-state-city';
import {fetchEmail} from '@/utils/fetchEmail';
import { useRouter } from 'next/navigation';


const page = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dob, setDob] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [countries, setCountries] = useState([])
  const [states, setStates] = useState('Select State')
  const [selectedCountry, setSelectedCountry] = useState('Select Country');
  const [passwordError, setPasswordError] = useState('')
  const [error, setError] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneCode, setPhoneCode] = useState('Phone Code')
  // const [data, setData] = useState('')

  const [userEmail, setUserEmail] = useState('')
  const router = useRouter()


  const allCountries = Country.getAllCountries()
  const allStates = State.getStatesOfCountry(selectedCountry)
  const countryPhoneCode = Country.getCountryByCode(selectedCountry)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,20}$/;

    if (firstName && lastName && password) {
      if (passwordRegex.test(password)) {
        if (password === confirmPassword) {
          const userPassword = confirmPassword
          const userCountry = Country.getCountryByCode(countries).name
          
          const data = {
            userEmail,
            firstName,
            lastName,
            dob,
            userPassword,
            states,
            userCountry,
            phoneCode,
            phoneNumber
          }
          
          await fetch ('/api/reg', {
            method: 'POST',
            body: JSON.stringify({
              action: 'userReg',
              ...data
            }),
            headers: {
              "Content-Type" : "application/json",
              Accept: "application/json",
            },
          })
            .then(res => {
              if(res.ok) {
                setError('')
                setPasswordError('')
                console.log('Data sent to backend')
                router.push('/auth/signin')
              } else {
                alert("Data not sent")
              }
            })
            .catch(err => {
              throw new Error('Bad request')
            })
          // console.log(data)

  
        } else {
          setPasswordError("Password does not match")
        }

      } else {
        setPasswordError('Password must contain stuff')
      }
    } else {
      setError('Please fill all fields')
    }

  }

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value)
    setCountries(e.target.value)
  }

  
  // useEffect(() => {
  //   const fetchEmaill = async () => {
  //     await fetch('/api/reg/reg-email')
  //       .then(response => response.json())
  //       .then((result) => {
  //         console.log(result)
  //         setData(result.name)
  //       })
  //   }
  //   fetchEmaill()
  // }, [])


  return (
    <div className=''>

      <form className='ml-32 mt-16'>
        <input 
          type='email'
          required
          className='w-48 h-8 border-2 border-black' 
          placeholder='Confirm Email'
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <div className='flex flex-col gap-4'>
          <label 
            htmlFor='firstName'
            >
              First Name
          </label>
          <input 
            required 
            id='firstName' 
            type='text'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            className='w-72 h-4 p-4 border-black border-2 rounded-sm' 
          />
          <label 
            htmlFor='lastName'
              >
                Last Name
            </label>
          <input 
            required
            id='lastName' 
            type='text'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            className='w-72 h-4 p-4 border-black border-2 rounded-sm' 
          />
        </div>
        <div className='flex flex-col gap-4'>
          <select 
            name='country'
            value={selectedCountry}
            onChange={(e) => {
              handleCountryChange(e)              
            }}
            required
            className='w-72 h-8 mt-4  border-black border-2 rounded-sm' 
            >
              <option disabled>Select Country</option>
              {
                allCountries.map(country => {
                  return (
                    <option key={country.name} value={country.isoCode}>
                      {country.name}
                    </option>
                  )

                })
              }
          </select>
          <select 
            value={states}
            onChange={e => setStates(e.target.value)}
            required
            className='w-72 h-8 mt-4  border-black border-2 rounded-sm' 
            >
              <option disabled>
                Select State
              </option>
              {allStates.map(city => {
                return(
                  <option key={city.isoCode} value={city.name}>
                    {city.name}
                  </option>
                )
              })}
          </select>
        </div>
        <div className='mt-[10px]'>
          <label htmlFor='phone' className=''>Phone Number</label>
          <div id='phone'>
            <select 
              value={phoneCode} 
              onChange={e => setPhoneCode(e.target.value)}
              className=' h-8 mt-[3px] mr-[5px] border-black border-2 rounded-sm' 

              >
                <option  disabled>Phone Code</option>
                {countryPhoneCode && <option value={countryPhoneCode.phonecode}>{countryPhoneCode.phonecode}</option>}

            </select>
            <input   
              type='tel'  
              value={phoneNumber}   
              onChange={e => setPhoneNumber(e.target.value)}     
              className='w-[150px] h-8 mt-4 pl-[5px] border-black border-2 rounded-sm' 
              placeholder='70 5000 000 00'
            />
          </div>
        </div>
        <div className='flex gap-[5px] flexCenter'>
          <label htmlFor="dob">Date of Birth:</label>
          <input 
            type="date" 
            id="dob" 
            name="dob"
            value={dob}
            onChange={e => setDob(e.target.value)}
            className='w-[150px] h-8 mt-4  border-black border-2 rounded-sm' 
          />
        </div>

        <div>
          <input 
            required
            type='password' 
            placeholder='Enter Password' 
            value={password}
            minLength={6}
            onChange={e => setPassword(e.target.value)}
            className='w-72 h-8 mt-4  border-black border-2 rounded-sm' 
            />

          <input 
            required
            type='password' 
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder='Confirm Password'
            minLength={6}
            className='w-72 h-8 mt-4  border-black border-2 rounded-sm' 
          />
          {passwordError && <p className='text-red-600 mt-[5px]'>{passwordError}</p>}
        </div>
        <button
          type='submit'
          className='w-[150px] h-8 mt-4  border-black border-2 rounded-sm' 
          onClick={handleSubmit}
            >
              Continue
        </button>
        {error && <p className='text-red-600 mt-[5px]'>{error}</p>}
      </form>
    </div>
  )
}

export default page