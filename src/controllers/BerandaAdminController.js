const getDataService = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/services");
    const result = await response.json();
    if (response.ok) {
      return result.data.data;
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

const getDataBooking = async (data) => {
  let arr = [];
  try {
    const response = await fetch("http://127.0.0.1:8000/api/bookings");
    const result = await response.json();
    if (response.ok) {
      result.data.data.find((item) => {
        const service = data.find(
          (itemService) => itemService.id == item.id_service
        );

        item.car_type = service.car_type;
        item.service_type = service.service_type;

        arr.push(item);
      });
      return arr;
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

const deleteDataBooking = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/bookings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const result = await response.json();

    if (response.ok) {
      // console.log(result);
      window.location = "/admin";
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};


const exportToExcel = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/export-payments", {
      method: "GET",
      headers: {
        Accept:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });

    if (response.ok) {
      const result = await response.blob();
      const url = window.URL.createObjectURL(result);

      const aLinkElement = document.createElement("a");
      aLinkElement.href = url;
      aLinkElement.download = "rekap.xlsx";
      document.body.appendChild(aLinkElement);
      aLinkElement.click();
      aLinkElement.remove();
    } else {
      console.error("Error fetching services");
    }
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

export { getDataBooking, getDataService, deleteDataBooking, exportToExcel }