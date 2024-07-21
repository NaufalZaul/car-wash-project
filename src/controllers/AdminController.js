const getDataService = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/services");
    const result = await response.json();
    if (response.ok) {
      return result.data.data
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

const getDataPackage = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/package");
    const result = await response.json();
    if (response.ok) {
      return result.data.data
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};
export { getDataService, getDataPackage };