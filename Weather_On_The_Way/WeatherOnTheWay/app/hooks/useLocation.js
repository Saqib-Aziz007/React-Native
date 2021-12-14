import {useEffect, useState} from 'react';
import GetLocation from 'react-native-get-location';

const useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = () => {
    GetLocation.getCurrentPosition({timeout: 5000, enableHighAccuracy: true})
      .then(position => {
        setLocation({
          latitude: position.latitude,
          longitude: position.longitude,
        });
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    getLocation();
  }, []);
  return location;
};

export default useLocation;
