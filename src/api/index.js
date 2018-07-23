
import 'whatwg-fetch';

class RuterAPI {
  stops = [
    {
        "id": "3011410",
        "name": "Hasle T",
        "type": "subway"
    },
    {
        "id": "3011490",
        "name": "Løren T",
        "type": "subway"
    },
    {
        "id": "3011415",
        "name": "Einars vei",
        "type": "bus"
    },
  ];

  getDepartures(stop) {
    const prettifyDepartureData = (data) => {
      let processed = data
        .map(x => {
            return {
                'name': `${x.MonitoredVehicleJourney.PublishedLineName} ${x.MonitoredVehicleJourney.DestinationName}`,
                'number': x.MonitoredVehicleJourney.PublishedLineName,
                'destination': stop.type === 'subway'
                    ? x.MonitoredVehicleJourney.DestinationName.split(' ')[0]//.splice(-1)
                    : x.MonitoredVehicleJourney.DestinationName,
                'eta': new Date(x.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime),
                'deviations': x.Extensions.Deviations.map(x => x.Header),
                'occupancy': x.Extensions.OccupancyData,
            };
        })
        .sort(function (a, b) { return a.eta - b.eta });
        
      let lines = {};
      processed.forEach(x => {
          if (!(x.name in lines))
              lines[x.name] = {
                  number: x.number,
                  destination: x.destination,
                  arrivals: []
              };
          lines[x.name].arrivals.push(x);
      });

      return {
        ...stop,
        lines: Object.keys(lines).map(x => ({ name: x, ...lines[x]}))
      };
    }

    return new Promise((resolve, reject) => {
      fetch(`https://reisapi.ruter.no/StopVisit/GetDepartures/${stop.id}`)
      .then(response => {
        response.json().then(json => {
          return resolve(prettifyDepartureData(json, stop))
        })
        .catch(error => {
          console.error('[ruter::get::json]', error);
          reject(error);
        });
      })
      .catch(error => {
        console.error('[ruter::json]', error);
        reject(error);
      });
    })

    
  }
}

export const ruterAPI = new RuterAPI();