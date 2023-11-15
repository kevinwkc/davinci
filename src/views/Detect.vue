<template>
  <div class="detect">
    <h1>Viz for Anomalies Detection/Trading</h1>

    <p>Here is some demo chart can be use for Visualization</p>

    <h3>Look for Spike in dynamic table for outlier:</h3>
    <Bar v-if="ready_box" :data="data_bar" :options="options" />

    <h3>Clustering for finding outlier</h3>
    <Scatter v-if="ready_s" :data="data_s" :options="options"/>

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

import {mapActions} from 'vuex';
import {chunk, zip, map} from 'lodash/fp';
export default {
  name: 'Detect',
  components: {
    Bar,
    Scatter
  },
  methods: {
    ...mapActions(['randInt', 'hello']),
    async getData(){
      //this.$store.dispatch('randInt',{a:1,b:100,n:3})
      //this.hello()
      this.randInt({a:1,b:100,n:12}).then((d)=> {
        this.data_bar.datasets[0].data=d
        this.ready_box=true  
        return
      })

      this.randInt({a:1,b:300,n:400}).then((d)=> {
        var [a,b]=chunk(200, d)
        var [l,r] = chunk(100, zip(a,b).map((a)=>({ x: a[0], y: a[1]})))

        this.data_s.datasets[0].data=l
        this.data_s.datasets[1].data=r
        this.ready_s=true  
        return
      })
    }
  },
  created(){
    this.getData();
    //console.log(this.data_s)
  },
  data() {
    return {
      ready_box: false,
      ready_s:false,
      data_bar: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{ label:'login',      borderColor: '#f87979',
      backgroundColor: '#f87979', data:[11, 22, 33] }]  //[40, 20, 12] 
      },
      options: {
        responsive: true
      },
      data_s: {
  datasets: [
    {
      label: 'window',
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
      label: 'linux',
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