import { useEffect, useMemo } from "react";
import { Marker, Popup } from "react-leaflet";
import L, { LatLngTuple, icon } from "leaflet";
import { useMap } from "react-leaflet";
import { IpData } from "../Data/IpDataInterface";
import customIcon from "../../public/icon-location.svg";

export default function MarkerPosition({
  IpValue,
}: {
  IpValue: IpData | null;
}) {
  const position: LatLngTuple = useMemo(() => {
    return [IpValue?.lat ?? 0, IpValue?.lon ?? 0];
  }, [IpValue?.lat, IpValue?.lon]);

  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);

  return (
    <>
      <Marker
        icon={L.icon({
          iconUrl: customIcon,
          iconSize: [12, 12],
          iconAnchor: [6, 6],
        })}
        position={position}
      >
        <Popup>This is the location of the IP Address</Popup>
      </Marker>
    </>
  );
}
