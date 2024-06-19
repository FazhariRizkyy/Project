const ctx2 = document.getElementById("lineChart");

new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "July"],
    datasets: [
      {
        label: "Dalam Kurs Rupiah",
        data: [14000000, 19000000, 10000000, 15000000, 8000000, 6000000, 11000000, 12000000],
        borderWidth: 2,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 5,
        pointHoverRadius: 7, 
      },
    ],
  },
  options: {
    responsive: true,
  },
});
