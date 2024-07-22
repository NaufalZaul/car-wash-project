const addDataService = async (data) => {
  try {
    const response = await fetch("http://localhost:8000/api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    if (response.ok) {
      alert("Berhasil ditambahkan!");
      window.location.reload();
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

const getSpecificDataService = async (id) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/services/${id}`
    );
    const result = await response.json();

    if (response.ok) {
      return result.data;
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

const updateDataService = async (id, data) => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/services/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    if (response.ok) {
      alert("Berhasil diperbarui!");
      window.location.reload();
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

const deleteDataService = async (id) => {
  console.log(id);
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/services/${id}`,
      {
        method: "DELETE",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(id),
      }
    );
    const result = await response.json();
    console.log(result);
    if (response.ok) {
      alert("Berhasil dihapus!");
      window.location.reload();
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};
export { getSpecificDataService, addDataService, updateDataService, deleteDataService }