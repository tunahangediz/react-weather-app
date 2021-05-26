function WeatherCard({ data }) {
    function checkCondition() {
        return data.weather[0].icon;
    }

    return (
        <div className="bg-blue-300 rounded-xl w-screen sm:w-96 max-w-lg h-96 mx-auto mt-20 py-4">
            <div className="card-body h-full  flex flex-col justify-around items-center">
                <h2 className="text-6xl">
                    {data.name.replace("Province", " ")}
                </h2>
                <img
                    src={`http://openweathermap.org/img/wn/${checkCondition()}@2x.png`}
                    style={{ width: "200px" }}
                    alt=""
                />
                <div className="text-3xl">{data.main.temp}°C</div>
            </div>
        </div>
    );
}

export default WeatherCard;
