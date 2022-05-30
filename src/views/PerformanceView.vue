<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      [Place filter component here]
    </div>
    <div class="c-dashboard__header">
      <performance-chart
        :performanceChart="performanceChart"
      ></performance-chart>
    </div>
  </div>
</template>


<script>
import PerformanceChart from '../components/PerformanceChart.vue'

export default {
  name: "PerformanceView",
  components: {
    PerformanceChart
  },
  computed: {
    ...mapGetters(['performanceChart'])
  },
  methods: {
    ...mapActions(['getPerformanceChartAction'])
  },
  created() {
    this.getPerformanceChartAction()
  }
};
</script>