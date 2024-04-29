<script setup>
import { useStore } from 'pinia';

const store = useStore();

const metricUnits = ref(true);
const height = ref(null);
const weight = ref(null);

const calculateBMI = () => {
  const bmi = metricUnits.value
      ? weight.value / (height.value * height.value) // metric calculation
      : (weight.value / (height.value * height.value)) * 730; // American units calculation

  // Storing the BMI data in Pinia store
  store.calculateBMI({ height: height.value, weight: weight.value, bmi });
};
</script>

<template>
  <div>
    <!-- Displaying the app's Name -->
    <h2>Body Mass Index calculator</h2>
    <!-- Form for entering height and weight -->
    <form @submit.prevent="calculateBMI">
      <div>
        <!-- Labels and inputs for height -->
        <label v-if="metricUnits">Height(meters):</label>
        <label v-else>Height (Inches):</label>
        <input type="number" v-model="height" required>
      </div>

      <div>
        <!-- Labels and inputs for weight -->
        <label v-if="metricUnits">Weight(kg):</label>
        <label v-else>Weight (lbs):</label>
        <input type="number" v-model="weight" required>
      </div>
      <!-- button to calculate BMI -->
      <button type="submit">calculate</button>
    </form>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
