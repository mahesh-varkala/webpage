var chart = $("#lineChart");
console.log(chart);
Chart.defaults.global.elements.point.pointStyle = 'dash';
let lineChart = new Chart(chart, {
	type: 'line',
	data: {
		labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',],
		// pointStyle: dash,

		datasets: [
			{
				label: "Keyword 1",
				borderColor: 'red',
				// fill: false,
				pointBackgroundColor: 'blue',
				data: [10, 20, 80, 50, 40, 90]
			}, {
				label: "Keyword 2",
				borderColor: 'blue',
				fill: false,
				pointBackgroundColor: 'blue',
				data: [30, 20, 70, 50, 40, 10]
			}, {
				label: "Keyword 3",
				borderColor: 'yellow',
				fill: false,
				pointBackgroundColor: 'blue',
				data: [60, 70, 30, 10, 60, 30]
			}, {
				label: "Keyword 4",
				borderColor: 'green',
				fill: false,
				pointBackgroundColor: 'blue',
				data: [10, 20, 70, 40, 30, 90],
			},
		]
	},
	options: {
		legend: {
			position: 'bottom',
			labels: {
				fontColor: 'white',
				boxWidth: 10,
				usePointStyle: true
			},
		},
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true,
					fontColor: 'white'
				}
			}],
			xAxes: [{
				ticks: {
					fontColor: 'white'
				}
			}]
		}
	}
});