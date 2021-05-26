import { useState, useEffect } from "react";
import "./App.css";
import useFetch from "./Hooks/useFetch";
import WeatherCard from "./WeatherCard";

function App() {
    const [city, setCity] = useState("Antalya");
    const [value, setValue] = useState("");

    const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WHEATHER_API_KEY}`;

    const { data, isPending, error } = useFetch(api, city);

    return (
        <div className="App bg-blue-400 h-screen flex flex-col items-center  ">
            <h1 className="text-2xl">Weather App</h1>
            <form
                className="text-2xl mt-4 bg-white w-screen sm:w-96 h-14 flex rounded-3xl"
                onSubmit={(e) => {
                    e.preventDefault();
                    setCity(value);
                    setValue("");
                }}
            >
                <input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    type="text"
                    placeholder="New York "
                    className=" border-r-2 border-gray-300 px-4 w-full outline-none bg-transparent"
                />
                <button
                    className="px-2 bg-transparent focus:outline-none"
                    type="submit"
                >
                    search
                </button>
            </form>

            {isPending && <h1>Loading</h1>}
            {error && <h1>Info not Found</h1>}
            {!isPending && (
                <WeatherCard data={data} city={city} error={error} />
            )}
        </div>
    );
}

export default App;
