import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const organizations = [
  { id: 1, name: 'Boston Area Gleaners', lat: 42.364506, lng: -71.038887 },
  { id: 2, name: 'Boulder Food Rescue', lat: 40.014984, lng: -105.270546 },
  { id: 3, name: 'City Harvest', lat: 40.730610, lng: -73.935242 },
  { id: 4, name: 'Food Cycle', lat: 51.509865, lng: -0.118092 },
  { id: 5, name: 'African Conservation Foundation', lat: 9.1021, lng: 18.2812 },
  { id: 6, name: 'Tree People', lat: 34.052235, lng: -118.243683 },
  { id: 7, name: 'Trees Atlanta', lat: 33.748783, lng: -84.388168 },
  { id: 8, name: 'Tree Trust', lat: 46.392410, lng: -94.636230 },
  { id: 9, name: 'Clean Communities', lat: 39.833851, lng: -74.871826 },
  { id: 10, name: 'The Water Conservation Garden', lat: 32.715736, lng: -117.161087 },
  { id: 11, name: 'WWF International HQ', lat: 46.41581095017156, lng: 6.277830271164264 },
  { id: 13, name: 'United States: New York WCS Headquarters', lat: 40.850655, lng: -73.878524 },
  { id: 14, name: 'WCS Afghanistan', lat: 34.5553, lng: 69.2075 },
  { id: 15, name: 'WCS Arctic Beringia', lat: 64.8375, lng: -147.7164 },
  { id: 16, name: 'WCS Argentina', lat: -34.5795, lng: -58.4438 },
  { id: 17, name: 'WCS Bangladesh', lat: 23.7550, lng: 90.3845 },
  { id: 18, name: 'United States: Washington, DC WCS Office', lat: 38.8977, lng: -77.0365 },
  { id: 19, name: 'United States: WCS North America Regional Program Office', lat: 45.6769, lng: -111.0429 },
  { id: 20, name: 'WCS Vietnam', lat: 21.0285, lng: 105.8542 },
  { id: 21, name: 'WCS Zambia', lat: -15.3875, lng: 28.3228 },
  { id: 22, name: 'Fundación Vida Silvestre Argentina', lat: -34.6099, lng: -58.3795 },
  { id: 23, name: 'WWF - Հայաստան', lat: 40.1792, lng: 44.5112 },
  { id: 24, name: 'WWF Österreich', lat: 48.2082, lng: 16.3738 },
  { id: 25, name: 'WWF Australia', lat: -35.2809, lng: 149.1300 },
  { id: 26, name: 'WWF Azerbaijan', lat: 40.4093, lng: 49.8671 },
  { id: 27, name: 'WWF-Belgique', lat: 50.8503, lng: 4.3517 },
  { id: 28, name: 'WWF Belize', lat: 17.4985, lng: -88.1882 },
  { id: 29, name: 'WWF Bhutan', lat: 27.5142, lng: 90.4336 },
  { id: 30, name: 'WWF Bolivia', lat: -16.5004, lng: -68.1509 },
  { id: 31, name: 'Heart of Borneo Forests', lat: 2.8459, lng: 112.0718 },
  { id: 32, name: 'WWF-Brasil', lat: -15.8267, lng: -47.9218 },
  { id: 33, name: 'WWF В БЪЛГАРИЯ', lat: 42.6977, lng: 23.3219 },
  { id: 34, name: 'WWF-Cambodia', lat: 11.5564, lng: 104.9282 },
  { id: 35, name: 'WWF-Canada', lat: 45.4215, lng: -75.6972 },
  { id: 36, name: 'WWF-Caucasus', lat: 41.7167, lng: 44.7833 },
  { id: 37, name: 'WWF Chile', lat: -33.4569, lng: -70.6483 },
  { id: 38, name: 'WWF 中国', lat: 39.9042, lng: 116.4074 },
  { id: 39, name: 'WWF Colombia', lat: 4.7110, lng: -74.0721 },
  { id: 40, name: 'WWF Hrvatskoj', lat: 45.8150, lng: 15.9819 },
  { id: 41, name: 'WWF Danmark', lat: 55.6761, lng: 12.5683 },
  { id: 42, name: 'WWF Ecuador', lat: -0.1807, lng: -78.4678 },
  { id: 43, name: 'WWF European Policy Office', lat: 50.8503, lng: 4.3517 },
  { id: 44, name: 'WWF Suomi', lat: 60.1695, lng: 24.9354 },
  { id: 45, name: 'WWF France', lat: 48.8566, lng: 2.3522 },
  { id: 46, name: 'WWF Deutschland', lat: 52.5200, lng: 13.4050 },
  { id: 47, name: 'Greater Mekong', lat: 13.7563, lng: 100.5018 },
  { id: 48, name: 'WWF Hellas', lat: 37.9838, lng: 23.7275 },
  { id: 49, name: 'WWF Guatemala', lat: 14.634915, lng: -90.506882 },
  { id: 50, name: 'WWF Guianas', lat: 5.8520, lng: -56.0072 },
  { id: 51, name: 'WWF Honduras', lat: 14.634915, lng: -87.797512 },
  { id: 52, name: 'WWF 香港 （中国）', lat: 22.3964, lng: 114.1095 },
  { id: 53, name: 'WWF Magyarország', lat: 47.4979, lng: 19.0402 },
  { id: 54, name: 'WWF-India', lat: 28.6139, lng: 77.2090 },
  { id: 55, name: 'WWF-Indonesia', lat: -6.2088, lng: 106.8456 },
  { id: 56, name: 'WWF Italia', lat: 41.9028, lng: 12.4964 },
  { id: 57, name: 'WWF ジャパン', lat: 35.6895, lng: 139.6917 },
  { id: 58, name: 'WWF Kenya', lat: -1.2921, lng: 36.8219 },
  { id: 59, name: 'WWF Korea', lat: 37.5665, lng: 126.9780 },
  { id: 60, name: 'WWF-Laos', lat: 19.8563, lng: 102.4955 },
  { id: 61, name: 'WWF Madagascar', lat: -18.8792, lng: 47.5079 },
  { id: 62, name: 'WWF-Malaysia', lat: 3.1390, lng: 101.6869 },
  { id: 63, name: 'WWF Mediterranean PO', lat: 34.0522, lng: -118.2437 },
  { id: 64, name: 'WWF United Arab Emirates', lat: 25.276987, lng: 55.296249 },
  { id: 65, name: 'WWF-UK', lat: 51.5200, lng: -0.1270 },
  { id: 66, name: 'WWF México', lat: 19.4326, lng: -99.1332 },
  { id: 67, name: 'WWF Монголд', lat: 47.8864, lng: 106.9057 },
  { id: 68, name: 'WWF Moçambique', lat: -25.8919, lng: 32.6105 },
  { id: 69, name: 'WWF Nepal', lat: 27.7172, lng: 85.3240 },
  { id: 70, name: 'Wereld Natuur Fonds', lat: 52.3676, lng: 4.9041 },
  { id: 71, name: 'WWF New Zealand', lat: -41.2865, lng: 174.7762 },
  { id: 72, name: 'WWF-Norge', lat: 60.4720, lng: 8.4689 },
  { id: 73, name: 'WWF Pakistan', lat: 30.3753, lng: 69.3451 },
  { id: 74, name: 'WWF in Papua New Guinea', lat: -9.4438, lng: 147.1803 },
  { id: 75, name: 'WWF Paraguay', lat: -23.4425, lng: -58.4438 },
  { id: 76, name: 'WWF Perú', lat: -12.0464, lng: -77.0428 },
  { id: 77, name: 'WWF-Philippines', lat: 13.4125, lng: 122.5635 },
  { id: 78, name: 'WWF Polska', lat: 52.2297, lng: 21.0122 },
  { id: 79, name: 'WWF Mediterrâneo (Portugal)', lat: 38.7223, lng: -9.1393 },
  { id: 80, name: 'WWF-România', lat: 44.4268, lng: 26.1025 },
  { id: 81, name: 'IFAW International Headquarters', lat: 38.9102, lng: -77.0369 },
  { id: 82, name: 'IFAW International Operations Center', lat: 41.6816, lng: -70.2330 },
  { id: 83, name: 'IFAW Australia', lat: -33.8805, lng: 151.2095 },
  { id: 84, name: 'IFAW Belgium', lat: 50.8420, lng: 4.3783 },
  { id: 85, name: 'IFAW Canada', lat: 45.4174, lng: -75.6962 },
  { id: 86, name: 'IFAW China', lat: 39.9247, lng: 116.4596 },
  { id: 87, name: 'IFAW France', lat: 49.2450, lng: 4.0222 },
  { id: 88, name: 'IFAW Germany', lat: 53.5583, lng: 9.9367 },
  { id: 89, name: 'IFAW Kenya', lat: -1.2988, lng: 36.7872 },
  { id: 90, name: 'IFAW Malawi', lat: -13.9984, lng: 33.7694 },
  { id: 91, name: 'IFAW Netherlands', lat: 52.0884, lng: 4.2810 },
  { id: 92, name: 'IFAW South Africa', lat: -34.0253, lng: 18.4265 },
  { id: 93, name: 'IFAW United Arab Emirates', lat: 25.1493, lng: 55.2365 },
  { id: 94, name: 'IFAW United Kingdom', lat: 51.5022, lng: -0.1057 },
  { id: 95, name: 'IFAW Zambia', lat: -13.5343, lng: 32.5874 },
  { id: 96, name: 'IFAW Zimbabwe', lat: -17.8020, lng: 31.0416 },
  { id: 97, name: 'NRDC New York (HQ)', lat: 40.7405, lng: -73.9945 },
  { id: 98, name: 'NRDC Bozeman', lat: 45.6765, lng: -111.0345 },
  { id: 99, name: 'NRDC Chicago', lat: 41.8842, lng: -87.6330 },
  { id: 100, name: 'NRDC San Francisco', lat: 37.7909, lng: -122.4023 },
  { id: 101, name: 'NRDC Santa Monica', lat: 34.0141, lng: -118.4955 },
  { id: 102, name: 'NRDC, Washington, D.C.', lat: 38.9045, lng: -77.0340 },
  { id: 103, name: 'NRDC, Beijing', lat: 39.9585, lng: 116.4596 },
  { id: 104, name: 'NRDC, New Delhi', lat: 28.5903, lng: 77.2274 },
  { id: 105, name: 'Defenders of Wildlife HQ', lat: 35.64231699161153, lng: -82.55223292228366 },
  { id: 106, name: 'CAN International HQ', lat: 50.7374, lng: 7.0982}
];

class MapContainer extends Component {
  state = {
    activeMarker: null,
    selectedOrg: null
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedOrg: props.name
    });

  onClose = () =>
    this.setState({
      activeMarker: null,
      selectedOrg: null
    });

  render() {
    return (
      <div className='Map'> 
         <Map
            google={this.props.google}
            zoom={2.5}
            style={mapStyles}
            initialCenter={{ lat: 0, lng: 0}}
            disableDefaultUI={true}
            >
            {organizations.map(org => (
               <Marker
                  key={org.id}
                  position={{ lat: org.lat, lng: org.lng }}
                  title={org.name}
                  name={org.name}
                  onClick={this.onMarkerClick}
               />
            ))}

            <InfoWindow
               marker={this.state.activeMarker}
               visible={this.state.activeMarker !== null}
               onClose={this.onClose}
               >
                  <div style={{ backgroundColor: 'white', padding: '10px' }}>
                     <h3 style={{ color: '#05386b' }}>{this.state.selectedOrg}</h3>
                  </div>
            </InfoWindow>
         </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAB4gZF2Zhm_fCGtew7vVM4FKTpxEA349E'
})(MapContainer);
