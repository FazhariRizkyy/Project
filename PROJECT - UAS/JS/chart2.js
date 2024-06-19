const ctx1 = document.getElementById("doughnut");

new Chart(ctx1, {
  type: "doughnut",
  data: {
    labels: ["Akademisi", "Teknisi", "Mentor", "Karyawan", "Cleaning Service",],
    datasets: [
      {
        label: "Jumlah Karyawan",
        data: [81 , 30, 21, 105, 10,],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true
  },
});
