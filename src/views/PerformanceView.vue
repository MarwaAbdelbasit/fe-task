<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      [Place filter component here]
    </div>
    <div class="c-dashboard__header">
      <PerformanceChart
        :PerformanceChart="PerformanceChart"
      />
    </div>
    {{performanceChart}}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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