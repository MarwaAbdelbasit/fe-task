<template>
    <div class="text-center d-flex align-items-center justify-content-center">
        <input class="form-control w-25 mr-2" v-model="search_query" type="text" placeholder="Enter search text...">
        <button type="button" class="btn btn-primary">Clear</button>
    </div>
</template>

<script>
// import actions and getters from store
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'SearchComponent',
    data() {
        return {
            search_query: ''
        }
    },
    computed: {
        ...mapGetters(['employeeList'])
    },
    watch: {
        search_query() {
            this.employeeList.filte
        }
    }
}
</script>

<style scoped>

</style>