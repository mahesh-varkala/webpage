AllKeysData = [];
var chart = $("#lineChart");
let lineChart = new Chart(chart, {
	type: 'line',
	data: {
		labels: ['2018-09-05', '2018-09-05', '2018-09-05', '2018-09-05', '2018-09-05',
			'2018-09-05', '2018-09-05', '2018-09-05', '2018-09-05', '2018-09-05'
		],
		// pointStyle: dash,
		datasets: [
			{
				label: "Keyword 1",
				borderColor: 'red',
				fill: false,
				pointBackgroundColor: 'blue',
				data: []
			}, {
				label: "Keyword 2",
				borderColor: 'blue',
				fill: false,
				pointBackgroundColor: 'blue',
				data: []
			}, {
				label: "Keyword 3",
				borderColor: 'yellow',
				fill: false,
				pointBackgroundColor: 'blue',
				data: []
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

function getData() {
	//Each dataset data is updated
	for (let i = 0; i < AllKeysData.length; i++) {
		lineChart.data.datasets[i].data = AllKeysData[i];
	}
	lineChart.update();
}

$(document).ready(function () {
	$.ajax({
		url: 'http://api.jsonbin.io/b/5b893b00db948c68635a04eb',
		dataType: 'json',
		success: function (graphData) {
			var keys = ["keyword 1", "keyword 2", "keyword 3", "keyword 4"];
			var keyIndex = [];
			for (let i = 0; i < keys.length; i++) {
				keyIndex[i] = Object.assign({}, graphData[keys[i]]);
			}
			console.log(keyIndex[0].points[1]);
			for (let i = 0; i < keys.length; i++) {
				var dataPoints = [];
				for (let j = 0; j < keyIndex[0].points.length; j++) {
					dataPoints.push(keyIndex[i].points[j]);
				}
				AllKeysData.push(dataPoints);
			}
			getData();
			console.log(AllKeysData);
		}
	});
});