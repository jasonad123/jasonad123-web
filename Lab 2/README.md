# BRT (Bus Rapid Transit) systems in North America (Canada, US, Mexico)


This map was intended to be an overview of the amount of systems considered by the [ITDP](https://www.itdp.org/library/standards-and-guides/the-bus-rapid-transit-standard/best-practices-2013/)
to meet their standards of bus rapid transit, as well as to what level of the standard (Gold, Silver, Bronze, Basic BRT, or not at all). Much of the
data was compiled from [BRTData](https://brtdata.org/), a service created by [the World Resources Instiute](https://wrirosscities.org/) and [BRT+ Centre of Excellence](http://www.brt.cl/).
For context, bus rapid transit is a transportation mode/concept that utilized a very high level of infrastructure and amenity (dedicated stations, real-time arrivals, dedicated lanes and
signal priority) to deliver a transit system on-par with rail-based modes of transportation. As the capital costs can be lower compared to rail-based transit, many urban areas are
considering or have installed BRT systems. However, not all meet the level of performance or level of amenity that is expected with a "high level" BRT system.
The intent was that a user could filter the map based on its level of service in the BRT Standard and on hover, it would show a popup including the city, system name
and the length of the system. It would largely be for transportation nerds like myself who are perpetually fascinated by these things. It would have been a good starting point.

Unfortunately, due to many circumstances this project did not turn out the way I anticipated (or really, at all). While I was able to successfully create the pop-ups, including
the names and a bus-shaped marker, I was unable to create a filter that would work on this data. I also was unable to figure out the recoloring of the symbology, as each "level"
of BRT standard in this map has a differing color (noted as a hex value in the GeoJSON file). I was also unable to figure out how to successfully import an external GeoJSON file for this dataset, which
explains why the HTML is extremely long.
