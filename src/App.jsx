import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react';
import { getData } from './redux/Weather';

function App() {
  const [data, setData] = useState("Tashkent")
  const weather = useSelector(state => state);
  const dispatch = useDispatch()
  const inputRef = useRef()
  
  useEffect(() => {
    dispatch(getData(data))
    console.log(14,data);
  }, [])
  function handleSubmit(e) {
    e.preventDefault()
    setData(inputRef.current.value)
    console.log(19, inputRef.current.value);
    
  }


  console.log(23, weather.weather.weather);
  // setData(weather.weather.weather.curren.value)
  // console.log(26, data);
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className="wrapper">
        <div className='input-father'><input ref={inputRef} placeholder="Joy nomini kiriting...." className="name" type="text" /></div>
        
      { weather.weather.status == "succes" && <>
      <h1>{data},{weather.weather.weather.sys.country}</h1>
        <div className="weather">
         <h3>Gradus      <span>{weather.weather.weather.main.temp}°C</span></h3>
        <h3>Namlik      <span>{weather.weather.weather.main.humidity}%</span></h3>
        <h3>Havo bosimi     <span>{weather.weather.weather.main.pressure}hPa</span></h3>
        <h3>Shamol      <span>{weather.weather.weather.wind.speed}mph</span></h3> 
        </div>{console.log(weather)}
        </>
    }
    <div className='btn-father'><button className="btn text-center">Qidirish</button></div>
    
    </form>
    </div>
  )
}

export default App
