import React, { useEffect } from "react";
import "../OlaMapsWebSDK/style.css";
import { OlaMaps } from "../OlaMapsWebSDK/olamaps-js-sdk.es";

function App() {
  useEffect(() => {
    const olaMaps = new OlaMaps({
      apiKey: "wAuLeLD9uSoxfVhKFslEJq0agit1yecn34xh7kHQ",
    });

    const myMap = olaMaps.init({
      style:
        "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
      container: "map",
      center: [77.61648476788898, 12.931423492103944],
      zoom: 15,
    });
  }, []);

  return (
    <>
      <div>
        <h1>Maps API testing</h1>
        <div id="map" style={{ width: "100%", height: "500px" }}></div>
      </div>
    </>
  );
}

export default App;
