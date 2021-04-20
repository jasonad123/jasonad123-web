# BRT (Bus Rapid Transit) systems in North America (Canada, US, Mexico)

![Map Image](https://github.com/jasonad123/jasonad123-web/blob/gh-pages/Lab2Revision/Screen%20Shot%202021-04-20%20at%2011.14.53%20AM.png?raw=true)

This map was intended to be an overview of the amount of systems considered by the [ITDP](https://www.itdp.org/library/standards-and-guides/the-bus-rapid-transit-standard/best-practices-2013/)
to meet their standards of bus rapid transit, as well as to what level of the standard (Gold, Silver, Bronze, Basic BRT, or not at all). Much of the
data was compiled from [BRTData](https://brtdata.org/), a service created by [the World Resources Instiute](https://wrirosscities.org/) and [BRT+ Centre of Excellence](http://www.brt.cl/).
For context, bus rapid transit is a transportation mode/concept that utilized a very high level of infrastructure and amenity (dedicated stations, real-time arrivals, dedicated lanes and
signal priority) to deliver a transit system on-par with rail-based modes of transportation. As the capital costs can be lower compared to rail-based transit, many urban areas are
considering or have installed BRT systems. However, not all meet the level of performance or level of amenity that is expected with a "high level" BRT system.
The intent was that a user could filter the map based on its level of service in the BRT Standard and on hover or click, it would show a popup including the city, system name
and the length of the system. It would largely be for transportation nerds like myself who are perpetually fascinated by these things.

After exploring and trying other methods (chronicled in [this repository](https://github.com/jasonad123/jasonad123-web/tree/gh-pages/Lab%202)), I ended up using a hybrid of Mapbox GL JS, Mapbox Studio, and [Mapbox's Find With Filters tool](https://labs.mapbox.com/education/impact-tools/finder-with-filters/). This allowed me to set up a map that showed the systems in one place with their vital statistics in the sidebar. On selection, the sidebar will focus on one system and show said statistics (name, city, system length, daily passenger counts). There is a filtering mechanism that works on the sidebar level (in that it will filter locations based on their BRT Standard level, but only in the sidebar). Unfortunately, due to the styling I wanted to pursue with this map (with proportional circles and icons) and the workings of the code, I was unable to get a true filter working. However, the code is set up such that a filter that actually affects could be put in place in the future, provided changes are made to the architecture of the code.
