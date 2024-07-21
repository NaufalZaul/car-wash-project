const addDataPackage = async (data) => {
  try {
    const response = await fetch("http://localhost:8000/api/package", {
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
      console.error("Error fetching package");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

const getSpecificDataPackage = async (id) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/package/${id}`
    );
    const result = await response.json();

    if (response.ok) {
      return result.data;
    } else {
      console.error("Error fetching package");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

const updateDataPackage = async (id, data) => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/package/${id}`,
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
      console.error("Error fetching package");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

const deleteDataPackage = async (id) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/package/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
      }
    );
    const result = await response.json();

    if (response.ok) {
      window.location = "/admin/layanan";
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};
export { getSpecificDataPackage, addDataPackage, updateDataPackage, deleteDataPackage };