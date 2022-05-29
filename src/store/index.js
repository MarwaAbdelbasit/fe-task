import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import { AXIOS } from '../axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employeeList: [],
    performanceChart: [],
  },
  getters: {
    employeeList: state => state.employeeList,
    performanceChart: state => state.performanceChart
  },
  mutations: {
    setEmployeeList: (state, data) => {
      state.employeeList = data
    },

    setPerformanceChart: (state, data) => {
      state.performanceChart = data
    }
  },
  actions: {
    getEmployeeListAction: ({commit}) => {
      AXIOS.get('employees')
        .then(res => {
          commit('setEmployeeList', res.data.employees)
        }).catch(err => {
          console.log(err.message);
        })
    },

    getPerformanceChartAction: ({commit}) => {
      AXIOS.get('performance')
        .then(res => {
          commit('setPerformanceChart', res.data)
          console.log(res.data);
        })
        .catch(err => {
          console.log(err.message);
        })
    }
  },
  modules: {
  }
})
