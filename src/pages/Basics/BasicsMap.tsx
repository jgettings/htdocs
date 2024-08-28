import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

const statesUrl = '/ne_110m_admin_1_states_provinces_lakes.geojson';
const landUrl = '/ne_110m_admin_0_countries_lakes.geojson';

/* eslint-disable */
const MapGeography: React.FC<{ url: string; className: string }> = ({
  url,
  className,
}) => (
  <Geographies geography={url} strokeWidth={2} className={className}>
    {({ geographies }) =>
      geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
    }
  </Geographies>
);
/* eslint-enable */

type MapProps = {
  locationText?: string;
  locationCoordinates?: [number, number];
  className?: string;
};

const Map: React.FC<MapProps> = ({
  locationText,
  locationCoordinates,
  className,
}) => (
  <ComposableMap
    projection="geoMercator"
    projectionConfig={{ center: [-98.58, 39.83], scale: 800 }}
    className={className}
  >
    <MapGeography
      url={landUrl}
      className="fill-teal-300 stroke-white dark:fill-teal-900 dark:stroke-black"
    />
    <MapGeography
      url={statesUrl}
      className="fill-teal-400 stroke-white dark:fill-teal-700 dark:stroke-black"
    />
    {locationCoordinates !== undefined ? (
      <Marker coordinates={locationCoordinates}>
        <circle r={8} className="fill-amber-900 dark:fill-amber-300" />
        <text
          textAnchor="end"
          y={10}
          x={-12}
          className="fill-amber-900 text-4xl font-bold dark:fill-amber-300"
        >
          {locationText}
        </text>
      </Marker>
    ) : null}
  </ComposableMap>
);

export default Map;
