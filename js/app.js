const close = document.getElementsByClassName("closebtn");
const traffic = document.getElementById("trafficChart");
const daily = document.getElementById("dailyChart");
const mobile = document.getElementById("doughnutChart");
const message = document.getElementById("userMessage");
const user = document.getElementById("searchUser");
const send = document.getElementById("send");



for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function () {
      div.style.display = "none";
    }, 600);
  };
}


//    ["1hr", "2hr", "3hr", "4hr", "5hr", "6hr", "7hr", "8ht"],   
//         label: "Hourly",
//         data: [1, 2, 1.75, 3.5, 2.8, 4.3, 6.4, 6.8],     


//  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],    
//         label: "Daily",
//         data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],       


let chart = new Chart(traffic, {
  type: "line",
  data: {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
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


//     labels: ['January', 'February', 'March', 'April',  'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//         data: [300, 1000, 800, 1500, 1400, 100 , 1000, 2000, 1500, 1750, 1250, 1850], 
//         



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


send.addEventListener("click", (e) =>{
    e.preventDefault();
    let messages = [];
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
        } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
        } else if (message.value === "" ) {
        alert("Please fill out message field before sending");
        } else {
        alert(`Message successfully sent to: ${user.value}`);
        }
        
})












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
