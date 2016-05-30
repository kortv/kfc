import { default as React, Component } from 'react';

import { GoogleMapLoader, GoogleMap, InfoWindow, Marker } from 'react-google-maps';

export default class PopUpInfoWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 55.756050, lng: 37.648181,
      },
      markers: [{
        position: new google.maps.LatLng(55.756050, 37.648181),
        showInfo: false,
      }],
    };
  }


  // Toggle to 'true' to show InfoWindow and re-renders component
  handleMarkerClick(marker) {
    marker.showInfo = true;
    this.setState(this.state);
  }

  handleMarkerClose(marker) {
    marker.showInfo = false;
    this.setState(this.state);
  }

  renderInfoWindow(ref, marker) {
    return (

      // You can nest components inside of InfoWindow!
      <InfoWindow
        key={`${ref}_info_window`}
        onCloseclick={this.handleMarkerClose.bind(this, marker)}>
        {ref === 'marker_1' ?
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16' height='16' viewBox='0 0 16 16'
            >
            </svg>
          </div>
        :
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16' height='16' viewBox='0 0 16 16'
            >
            </svg>
          </div>
        }
      </InfoWindow>
    );
  }
  render() {
    return (
      <GoogleMapLoader
        containerElement={
          <div
            {...this.props}
            style={{ height: '340px' }}
          >
          </div>
        }
        googleMapElement={
          <GoogleMap
            center={this.state.center}
            defaultZoom={16}
            ref='map'
          >
            {this.state.markers.map((marker, index) => {
              const ref = `marker_${index}`;

              return (
                <Marker
                key={index}
                ref={ref}
                position={marker.position}
                onClick={this.handleMarkerClick.bind(this, marker)}
                >

                {/*
                  Show info window only if the 'showInfo' key of the marker is true.
                  That is, when the Marker pin has been clicked and 'handleMarkerClick' has been
                  Successfully fired.
                */}
                {marker.showInfo ? this.renderInfoWindow(ref, marker) : null}

                </Marker>
              );
            })
            }

          </GoogleMap>
        }
      />
    );
  }
}
