
<script>
import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    props: {
        // label: {
        //     type: String
        // },
        // PerformanceChart: {
        //     type: Array
        // }
    },
    mounted() {
        // console.log('from bookings chart', this.bookingsRequestsChartData);
        const labels = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
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