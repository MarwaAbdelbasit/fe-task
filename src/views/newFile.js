"use strict";
import { mapActions, mapGetters } from 'vuex';

export default (await import('vue')).defineComponent({
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
this.getPerformanceChartAction();
}
});
