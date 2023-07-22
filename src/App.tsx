import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SearchBar from "./Components/SearchBar";
import GlobalStyle from "./GlobalStyle";
import { Helmet } from "react-helmet";
import MarkerPosition from "./Components/MarkerPosition";

function App() {
  const [Ip, setIP] = useState("192.212.174.101");
  const [IpValue, setIpValue] = useState<any | null>(null);

  useEffect(() => {
    const fetchIpData = async () => {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_f08ryL7xKDMbFwmM67YjKn9eNbAbQ&ipAddress=${Ip}`
      );
      const data = await response.json();
      setIpValue(data);
    };
    fetchIpData();
  }, []);
  const Handleinput = () => {
    if (Ip === "192.212.174.101") {
      setIP("");
    }
  };
  const handleClick = async () => {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_f08ryL7xKDMbFwmM67YjKn9eNbAbQ&ipAddress=${Ip}`
    );
    const data = await response.json();
    setIpValue(data);
  };
  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <SearchBar
        handleClick={handleClick}
        setIP={setIP}
        Ip={Ip}
        setIpValue={setIpValue}
        IpValue={IpValue}
        Handleinput={Handleinput}
        handleKey={handleKey}
      />
      {IpValue && (
        <MapContainer
          center={[IpValue.lat, IpValue.lng]}
          zoom={10}
          scrollWheelZoom={true}
          style={{ height: "100vh", zIndex: 1 }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MarkerPosition IpValue={IpValue} />
        </MapContainer>
      )}
    </div>
  );
}

export default App;
