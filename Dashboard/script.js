const navigation = document.getElementById("navigation");
const logo = document.getElementById("logo");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navigation.style.padding = "25px 10px";
    logo.style.fontSize = "25px";
  } else {
    navigation.style.padding = "60px 10px";
    logo.style.fontSize = "35";
  }
}


var ctx = document.getElementById("lineChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",
  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Line Graph",
        responsive:true,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        fill:true,
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  },
  // Configuration options go here
  options: {
    aspectRatio:5,
  },
});
var pi = document.getElementById("pieChart").getContext("2d");
var chart = new Chart(pi, {
  // The type of chart we want to create
  type: "pie",
  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        responsive:true,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: [
          'rgb(100, 99, 132)',
          'rgb(100, 99, 132)',
          'rgb(100, 99, 132)',
          'rgb(100, 99, 132)',
          'rgb(100, 99, 132)',
          'rgb(100, 99, 132)',
          'rgb(100, 99, 100)',
        ],
        borderWidth:2,
        maintainAspectRatio:true,
        data: [0, 10, 5, 20, 20, 30, 45],
      },
    ],
  },
  // Configuration options go here
  options: {
    hover:true,
    aspectRatio:1.5,
    legend:{
        display:true,
        position: 'right',
    }
  },
});
var bar = document.getElementById("barChart").getContext("2d");
var chart = new Chart(bar, {
  // The type of chart we want to create
  type: "bar",
  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: [
          "rgb(100, 99, 132)",
          "rgb(100, 99, 132)",
          "rgb(100, 99, 132)",
          "rgb(100, 99, 132)",
          "rgb(100, 99, 132)",
          "rgb(100, 99, 132)",
          "rgb(100, 99, 100)",
        ],
        borderWidth: 2,
        maintainAspectRatio:true,
        data: [0, 10, 5, 20, 20, 30, 45],
      },
    ],
  },
  // Configuration options go here
  options: {
    hover: true,
    aspectRatio:1.5,
  },
});
