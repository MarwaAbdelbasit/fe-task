
<script>
import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    props: {
        label: {
            type: String
        },
        PerformanceChart: {
            type: Array
        }
    },
    mounted() {
        // console.log('from bookings chart', this.bookingsRequestsChartData);
        var formattedDate = []
        let dateArray = PerformanceChart.map(el => el.date_ms)
        dateArray.forEach(element => {
            var date = new Date(element * 1000);
            // Hours part from the timestamp
            var hours = date.getHours();
            // Minutes part from the timestamp
            var minutes = "0" + date.getMinutes();
            // Seconds part from the timestamp
            var seconds = "0" + date.getSeconds();
            // Will display time in 10:30:23 format
            var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
            formattedDate.push(formattedTime)
        });

        var performanceData = PerformanceChart.map(el => el.performance)

        const data = {
            labels: formattedDate,
            datasets: [
                {
                    data: performanceData[0],
                    fill: false,
                    borderColor: '#00205C',
                    backgroundColor: '#00205C',
                    tension: 0.5,
                },

                {
                    data: performanceData[1],
                    fill: false,
                    borderColor: '#F5A800',
                    backgroundColor: '#F5A800',
                    tension: 0.5,
                },

                {
                    data: performanceData[2],
                    fill: false,
                    borderColor: '#00B189',
                    backgroundColor: '#00B189',
                    tension: 0.5,
                },

                {
                    data: performanceData[3],
                    fill: false,
                    borderColor: '#FFE800',
                    backgroundColor: '#FFE800',
                    tension: 0.5,
                },

                {
                    data: performanceData[4],
                    fill: false,
                    borderColor: '#FFE800',
                    backgroundColor: '#FFE800',
                    tension: 0.5,
                },

                {
                    data: performanceData[5],
                    fill: false,
                    borderColor: '#FFE800',
                    backgroundColor: '#FFE800',
                    tension: 0.5,
                },

                {
                    data: performanceData[6],
                    fill: false,
                    borderColor: '#FFE800',
                    backgroundColor: '#FFE800',
                    tension: 0.5,
                },
            ]
        };

        const options = {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                },
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    position: 'bottom',
                    align: 'center',
                    labels: {
                        usePointStyle: true,
                        boxWidth: 10,
                        fontSize: 20,
                        fontColor: '#000',
                        fontFamily: "'Roboto', sans-serif", 
                    },
                },
                bezierCurve: false,
                elements: {
                    line: {
                        tension: 0.5
                    },
                    point:{
                        radius: 0
                    }
                }
            };

        this.renderChart(data,options)
    }
}
</script>