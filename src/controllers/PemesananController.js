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
export { getDataService, getJenisLayanan };