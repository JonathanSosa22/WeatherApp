/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const Weather = ({ dataWeather }) => {
  const difKelvin = 273.15;

  return (
    <div className="flex flex-col justify-center items-center py-4 max-w-[290px] mx-auto">
      <img
        src={`http://openweathermap.org/img/wn/${dataWeather?.weather[0]?.icon}@2x.png`}
        alt={dataWeather?.weather[0]?.description}
        className="w-32 h-32"
      />
      <p className="text-7xl">
        {parseInt(dataWeather?.main?.temp - difKelvin)}
        <span className="text-[25px] font-bold">°C</span>
      </p>
      <p className="text-2xl capitalize">
        {dataWeather?.weather[0]?.description}
      </p>
      <div className="flex justify-center items-center gap-3">
        <h2 className="text-2xl font-bold py-5">
          {dataWeather?.name}, {dataWeather?.sys?.country}
        </h2>
      </div>
      <hr className="w-full h-0.5 bg-white" />

      <div className="flex justify-between items-center gap-4 py-5 text-center font-bold">
        <div>
          <h2>Humidity:</h2>
          <p>
            {dataWeather?.main?.humidity}
            <span className="text-[10px]">%</span>
          </p>
        </div>
        <div>
          <h2>Min Temp:</h2>
          <p>
            {parseInt(dataWeather?.main?.temp_min - difKelvin)}
            <span className="text-[10px]">°C</span>
          </p>
        </div>
        <div>
          <h2>Max Temp:</h2>
          <p>
            {parseInt(dataWeather?.main?.temp_max - difKelvin)}
            <span className="text-[10px]">°C</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
