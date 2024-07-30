const submitBooking = async (data) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.nama_lengkap,
        phone: `${data.no_telp}`,
        booking_time: `${data.waktu_pencucian}:00`,
        booking_date: data.tanggal_pencucian,
        id_service: data.jenis_layanan,
        id_package: data.jenis_layanan_tambahan,
        status: "scheduled",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error creating booking");
    }

    const bookingData = await response.json();
    const paymentResponse = await fetch("http://127.0.0.1:8000/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_booking: bookingData.data.id }),
    });

    if (!paymentResponse.ok) {
      const errorData = await paymentResponse.json();
      throw new Error(errorData.message || "Error processing payment");
    }

    const paymentData = await paymentResponse.json();
    const snapToken = paymentData.snapToken;

    window.snap.pay(snapToken, {
      onSuccess: function (result) {
        alert("Payment success!");
        formData.value = { ...formData.value, slide: 4 };
      },
      onPending: function (result) {
        alert("Payment pending!");
      },
      onError: function (result) {
        alert("Payment failed!");
      },
    });
  } catch (err) {
    console.error("Booking error: ", err.message);
    // errorMessage.set(err.message);
    alert("Error creating booking!");
  }
};

export default submitBooking;