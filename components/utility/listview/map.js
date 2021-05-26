import React, { Component } from 'react';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';
import mapData from './world-50m-with-population.json';

const wrapperStyles = {
  width: '100%',
  maxWidth: 980,
  margin: '0 auto',
  padding: '20px',
};

const popScale = scaleLinear()
  .domain([0, 100000000, 1400000000])
  .range(['#CFD8DC', '#607D8B', '#37474F']);

class BasicMap extends Component {
  handleClick = e => {
    this.props.overMap(e.properties.postal);
  };
  moveOut = e => {
    this.props.overMap('');
  };

  render() {
    const { countryCode } = this.props;
    return (
      <div style={wrapperStyles} key={countryCode} onMouseLeave={this.moveOut}>
        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11, 0, 0],
          }}
          width={980}
          height={551}
          style={{
            width: '100%',
            height: 'auto',
          }}
          onMouseLeave={this.moveOut}
        >
          <ZoomableGroup center={[0, 20]} disablePanning onMouseMove={this.moveOut}>
            <Geographies geography={mapData} countryCode={countryCode} onMouseMove={this.moveOut}>
              {(geographies, projection) => {
                return geographies.map((geography, i) => {
                  const isSelectedSpecialCoutry = geography.properties.postal === countryCode;
                  const isSelectedROW = !['AU', 'CA', 'US', ''].includes(countryCode);
                  const isSpecialCoutry = ['AU', 'CA', 'US'].includes(geography.properties.postal);
                  const isHover = isSelectedSpecialCoutry || (isSelectedROW && !isSpecialCoutry);

                  return (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      onClick={this.handleClick}
                      onMouseEnter={this.handleClick}
                      onMouseMove={this.handleClick}
                      style={{
                        default: {
                          fill: isHover ? '#263238' : '#ECEFF1',
                          stroke: '#607D8B',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                        hover: {
                          fill: isHover ? '#263238' : '#ECEFF1',
                          stroke: '#607D8B',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                        pressed: {
                          fill: '#263238',
                          stroke: '#607D8B',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                      }}
                    />
                  );
                });
              }}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

export default BasicMap;
