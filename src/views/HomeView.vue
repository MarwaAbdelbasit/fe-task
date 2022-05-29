<template>
  <div class="home">
    <div class="c-filters__container">
      <div class="text-center d-flex align-items-center justify-content-center">
        <input class="form-control w-25 mr-2" v-model.trim="search_query" type="text" placeholder="Enter search text...">
        <button type="button" @click="clearFilter" class="btn btn-primary">Clear</button>
      </div>
    </div>

    <table class="table table-striped table-hover">
      <thead class="c-users-list__header bg-primary">
        <tr>
          <th scope="col">Employee</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">Start Date</th>
          <th scope="col">Performance Index</th>
          <th scope="col">About</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="c-users-list__body"
          v-for="employee in employeeList"
          :key="employee.id"
        >
          <td
            class="c-users-list__main-info"
          >
            <img class="c-users-list__avatar" :src="employee.profile.avatar" :alt="employee.profile.name">
            <div class="employees">{{ employee.profile.name }}</div>
          </td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.profile.address }}</td>
          <td>{{ employee.start_date }}</td>
          <td>{{ employee.performance_index }}</td>
          <td class="about">{{ employee.profile.about }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import actions and getters from store
import { mapActions, mapGetters } from 'vuex'

// import components
import SearchComponent from '@/components/SearchComponent.vue'

export default {
  name: 'HomeView',
  data() {
      return {
          search_query: ''
      }
  },
  watch: {
    search_query() {
      let employeestext = document.querySelectorAll(".employees");
      let abouttext = document.querySelectorAll(".about");

      if (this.search_query !== "") {
        let re = new RegExp(this.search_query,"g"); // search for all instances
        employeestext.forEach(element => {
          let newEmployee = element.innerHTML.replace(this.search_query, `<mark>${this.search_query}</mark>`);
          element.innerHTML = newEmployee
        });
        abouttext.forEach(element => {
          let newAbout = element.innerHTML.replace(this.search_query, `<mark>${this.search_query}</mark>`);
          element.innerHTML = newAbout
        });
      }

      const urlParams = new URLSearchParams(window.location.search);

      urlParams.set('filter', this.search_query);

      window.location.search = urlParams;
    }
  },

  components: {
    SearchComponent
  },

  computed: {
    ...mapGetters(['employeeList'])
  },

  methods: {
    ...mapActions(['getEmployeeListAction']),

    clearFilter() {
      console.log('clear');
      // clear filter input
      this.search_query = '';

      // clear filter query
      const urlParams = new URLSearchParams(window.location.search);

      urlParams.set('filter', '');

      window.location.search = urlParams;
    }
  },

  created() {
    this.getEmployeeListAction()
  }
}
</script>

<style scoped>
.c-users-list {
  display: table;
  width: 100%;
  margin-bottom: 24px;
  font-size: 14px;
}
  .c-users-list__header {
    /* display: table-row; */
    font-size: 12px;
    font-weight: 500;
    color: #fff;
    /* background-color: #e5e9f1; */
  }
  .c-users-list__header  > div {
      display: table-cell;
      text-align: center;
      vertical-align: middle;
      font-size: 14px;
    }

  .c-users-list__body {
    display: table-row;
    height: 64px;
  }
  .c-users-list__body  > div {
      display: table-cell;
      padding: 0 8px;
      vertical-align: middle;
    }

  .c-users-list__avatar {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    border-radius: 50%;
  }

  .c-users-list__main-info {
    display: flex;
    align-items: center;
  }

</style>