import axios from "axios";
import * as turf from '@turf/turf';

const getDataService = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/services");
    const result = await response.json();
    if (response.ok) {
      const reduceDuplicate = new Set();
      result.data.data.filter((car) => {
        const duplicate = reduceDuplicate.has(car.car_type);
        reduceDuplicate.add(car.car_type);
        return !duplicate;
      });

      let layanan = result.data.data;
      let tipeMobil = [...reduceDuplicate];
      return { layanan, tipeMobil };
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

const getJenisLayanan = async (data) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/services");
    const result = await response.json();
    if (response.ok) {
      return result.data.data.find((item) => {
        if (item.id == data.jenis_layanan)
          return item;
      });
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

const getLayananTambahan = async (data) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/package");
    const result = await response.json();
    if (response.ok) {
      return result.data.data.find((item) => {
        if (item.id == data.jenis_layanan_tambahan)
          return item;
      });
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }

}

const cleaningAddress = async (address) => {
  let splittingAddress = address.alamat.split(',');
  let cleanedWhiteSpace = splittingAddress.map(address => address.trimStart());

  let match = cleanedWhiteSpace[0].match(/^(.*?)(?=\sRt\.|\sRw\.|\srw\.|\srw\.|\sGG\.|\sgg\.|$)/i);

  let newAddr = cleanedWhiteSpace.slice(-2);
  newAddr = [match[0].trim(), ...newAddr];

  return match ? newAddr : cleanedWhiteSpace;
}

const getCoordinate = async (address) => {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&addressdetails=1`;

  try {
    const response = await axios.get(url);
    const results = response.data;
    if (results.length > 0) {
      const location = results[0];
      return { latitude: location.lat, longitude: location.lon };
    } else {
      return false
      // throw new Error('No results found');
    }
  } catch (error) {
    console.error('Error getting coordinates:', error);
    throw error;
  }
}

const checkCoordinate = async (address) => {

  const madiunCoordinate = turf.polygon([[
    [111.4167, -7.8],
    [111.85, -7.8],
    [111.85, -7.2],
    [111.4167, -7.2],
    [111.4167, -7.8]
  ]]);

  try {
    let findAddr = await cleaningAddress(address)
    let setString = findAddr.join(', ')

    const { latitude, longitude } = await getCoordinate(setString);

    if (latitude && longitude) {
      const point = turf.point([longitude, latitude]);
      const isInside = turf.booleanPointInPolygon(point, madiunCoordinate);
      return isInside;
    } else {
      if (findAddr[1].toLowerCase() == 'madiun') return true
      return false;
    }
  } catch (error) {
    console.error('Error checking if in polygon:', error);
    return false;
  }
}

export { getDataService, getJenisLayanan, getLayananTambahan, checkCoordinate };