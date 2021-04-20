const config = {
  style: "mapbox://styles/jasonad123/cknqbq45u03yj17odndo3upy2",
  accessToken:
    "pk.eyJ1IjoiamFzb25hZDEyMyIsImEiOiJja2p1am5oZTEyYWZ4MnlxbHg4MWd4dDNlIn0.5eYHIg8hvmECM-pIGMwWyw",
  CSV: "./bus_features.csv",
  center: [-98.57595, 39.8283],
  zoom: 4,
  title: "BRT Systems in the US, Canada, and Mexico",
  description:
    "Bus Rapid Transit (BRT) is a high-quality bus-based transit system that delivers fast, comfortable, and cost-effective services at metro-level capacities. It does this through the provision of dedicated lanes, with busways and iconic stations typically aligned to the center of the road, off-board fare collection, and fast and frequent operations. " +
    "This map gives an overview of the various systems in the US, Canada and Mexico. The size of each bubble reflects ridership while the colour reflects its BRT Standard level.",

  sideBarInfo: ["City", "System_Name", "Daily_Passengers", "Length"],
  popupInfo: ["System_Name"],
  filters: [
    {
      type: "dropdown",
      title: "BRT Standard Level: ",
      columnHeader: "BRT Standard",
      listItems: [
       "Gold",
        "Silver",
        "Bronze",
        "Basic BRT",
        "Not BRT",
        "n/a",
      ],
    },

  ],
};
