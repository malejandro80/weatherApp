/** @format */

import { useEffect, useReducer } from 'react'

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { celciusToFarenheit } from '../helpers/weatherHelper'

const initialState = {
  mainWeather: {
    celcius: 23,
    Farenheit: 32,
    icon: faMapMarkerAlt,
    typeWeather: 'cloudy'
  },
  lastestWeather: [
    {
      celcius: 23,
      Farenheit: 32,
      day: 'Friday',
      icon: '09d',
      typeWeather: 'Rain',
      type: 'primary'
    },
    {
      celcius: 24,
      Farenheit: 34,
      day: 'Saturday',
      icon: '01d',
      typeWeather: 'clear',
      type: 'secondary'
    },
    {
      celcius: 23,
      Farenheit: 31,
      day: 'Sunday',
      icon: '04d',
      typeWeather: 'Cloudy',
      type: 'secondary'
    }
  ],
  otherWeathers: [
    {
      Celcius: 24,
      Farenheit: 75,
      city: 'Lyon',
      country: 'FR',
      decription: 'clear sky',
      hum: 55,
      icon: '01n',
      wind: { speed: 0.4 }
    }
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'mainWeather':
      return { ...state, mainWeather: action.payload }
    case 'addCountry':
      return {
        ...state,
        otherWeathers: [action.payload, ...state.otherWeathers]
      }

    default:
      return state
  }
}

const useApi = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    getBogotaWeather()
    getParisWeather()
  }, [])

  const getBogotaWeather = () => {
    const Http = new XMLHttpRequest()
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=c882b71b657daa6d938cf0765812ccaf&units=metric`
    Http.open('GET', url)

    Http.addEventListener('load', data => {
      const resp = JSON.parse(data.target.response)
      let mappedData = {
        Farenheit: celciusToFarenheit(Math.round(resp.main.temp)),
        Celcius: Math.round(resp.main.temp),
        icon: resp.weather[0].icon,
        decription: resp.weather[0].description
      }
      dispatch({ type: 'mainWeather', payload: mappedData })
    })
    Http.send()
  }

  const getParisWeather = () => {
    const Http = new XMLHttpRequest()
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=c882b71b657daa6d938cf0765812ccaf&units=metric`
    Http.open('GET', url)

    Http.addEventListener('load', data => {
      const resp = JSON.parse(data.target.response)
      let mappedData = {
        Farenheit: celciusToFarenheit(Math.round(resp.main.temp)),
        Celcius: Math.round(resp.main.temp),
        icon: resp.weather[0].icon,
        decription: resp.weather[0].description,
        city: resp.name,
        country: resp.sys.country,
        wind: resp.wind,
        hum: resp.main.humidity
      }

      dispatch({ type: 'addCountry', payload: mappedData })
    })

    Http.send()
  }

  //   return dispatch({ type: 'nextStep', step: payload.step })
  // }

  return {
    ...state
  }
}

export default useApi
