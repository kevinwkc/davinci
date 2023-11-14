<template>
  <div class="detect">
    <h1>Viz for Anomalies Detection/Trading</h1>

    <p>Here is some demo chart can be use for Visualization</p>

    <h3>Look for Spike in dynamic table for outlier:</h3>
    <Bar :data="data_bar" :options="options" />

    <h3>Clustering for finding outlier</h3>
    <Scatter :data="data_s" :options="options"/>

  </div>
</template>

<script>

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js'
import { Bar, Scatter} from 'vue-chartjs'

ChartJS.register(PointElement, LineElement,CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)


export default {
  name: 'Detect',
  components: {
    Bar,
    Scatter
  },
  data() {
    return {
      data_bar: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] }]
      },
      options: {
        responsive: true
      },
      data_s: {
  datasets: [
    {
      label: 'Scatter Dataset 1',
      fill: false,
      borderColor: '#f87979',
      backgroundColor: '#f87979',
      data: [
        {
          x: -2,
          y: 4
        },
        {
          x: -1,
          y: 1
        },
        {
          x: 0,
          y: 0
        },
        {
          x: 1,
          y: 1
        },
        {
          x: 2,
          y: 4
        }
      ]
    },
    {
      label: 'Scatter Dataset 2',
      fill: false,
      borderColor: '#7acbf9',
      backgroundColor: '#7acbf9',
      data: [
        {
          x: -2,
          y: -4
        },
        {
          x: -1,
          y: -1
        },
        {
          x: 0,
          y: 1
        },
        {
          x: 1,
          y: -1
        },
        {
          x: 2,
          y: -4
        }
      ]
    }
  ]
}

  
    }
  }
}
</script>
<style lang="">
  
</style>