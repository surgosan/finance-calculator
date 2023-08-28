<template>
  <div class="pie_wrapper">
    <Pie class="pie" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'vue-chartjs';
import { ref, onMounted } from 'vue';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const root = document.querySelector(':root');
const text = getComputedStyle(root).getPropertyValue('--header');
const accent = getComputedStyle(root).getPropertyValue('--accent');
const background = getComputedStyle(root).getPropertyValue('--background-3');

const chartData = ref({
  labels: ['General', 'Entertainment', 'Health', 'School'],
  datasets: [
    {
      backgroundColor: [background],
      hoverBackgroundColor: [accent],
      data: [40, 20, 80, 10]
    }
  ]
});

const chartOptions = {
  responsive: false,
  maintainAspectRatio: false,

  plugins: {
    title: {
      display: true,
      text: 'Snapshot Breakdown',
      color: text,
      font: {
        size: '20'
      }
    },
    legend: {
      display: false,
    },
    tooltip: {
      displayColors: false,
    }
  },
};
</script>