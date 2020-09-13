const close = document.getElementsByClassName("closebtn");
const traffic = document.getElementById("trafficChart");
const daily = document.getElementById("dailyChart");
const mobile = document.getElementById("doughnutChart");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function () {
      div.style.display = "none";
    }, 600);
  };
}

let chart = new Chart(traffic, {
  type: "line",
  data: {
    labels: [
      "16-22",
      "23-29",
      "30-5",
      "6-12",
      "13-19",
      "20-26",
      "27-3",
      "4-10",
      "11-17",
      "18-24",
      "25-31",
    ],
    datasets: [
      {
        label: "Traffic Data",
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: "rgba(116, 119, 191, .3)",
        lineTension: 0,
        borderWidth: 1,
      },
    ],
  },
  options: {
    aspectRatio: 2.5,
    animation: {
      duration: 0,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZone: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});

let chart2 = new Chart(daily, {
  type: "bar",
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "# of Hits",
        backgroundColor: "#7477BF",
        barPercentage: 0.5,
        barThickness: 25,
        maxBarThickness: 30,
        minBarLength: 2,
        data: [75, 115, 175, 125, 225, 200, 100],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZone: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});

let chart3 = new Chart(mobile, {
  type: "doughnut",
  data: {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [
      {
        label: "# of User",
        data: [550, 500, 2000],
        borderWidth: 0,
        backgroundColor: ["#78CF82","#51B6C8","#7477BF"],
      },
    ],
  },
  options: {
      legend:{
          position: "right",
          label: {
              boxWidth: 20,
              fontStyle: "bold"
          }
      }
  },
});

// const names = ["Victoria Chambers", "Dale Byrd", "Dawn Wood","Dan Oliver"];

// const input = document.getElementById("search");

// autocomplete({
//     input: input,
//     fetch: function(text, update) {
//         text = text.toLowerCase();
//         // you can also use AJAX requests instead of preloaded data
//         var suggestions = names.filter(n => n.label.toLowerCase().startsWith(text))
//         update(suggestions);
//     },
//     onSelect: function(item) {
//         input.value = item.label;
//     }
// });
