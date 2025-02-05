<template>
  <div>
    <h1>Sistema Digital de Hilos (SDH)</h1>
    <h2>Datos del Backend</h2>
    <ul>
      <li v-for="(item, index) in backendData" :key="index">
        Sensor ID: {{ item.sensor_id }} - Value: {{ item.value }}
      </li>
    </ul>
    <h2>Datos de Secium</h2>
    <ul>
      <li v-for="(item, index) in seciumData" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      backendData: [],
      seciumData: []
    };
  },
  methods: {
    async fetchBackendData() {
      try {
        const response = await axios.get('http://localhost:8000/api/data');
        this.backendData = response.data.data;
      } catch (error) {
        console.error('Error fetching backend data:', error);
      }
    },
    async fetchSeciumData() {
      try {
        const response = await axios.get('https://api.secium.com/data', {
          headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
        });
        this.seciumData = response.data;
      } catch (error) {
        console.error('Error fetching Secium data:', error);
      }
    }
  },
  mounted() {
    this.fetchBackendData();
    this.fetchSeciumData();
  }
};
</script>
