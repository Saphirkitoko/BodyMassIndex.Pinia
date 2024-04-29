import { defineStore } from 'pinia';

export const useBMIStore = defineStore({
    id: 'bmi',
    state: () => ({
        bmiData: null,
    }),
    actions: {
        calculateBMI(data) {
            this.bmiData = data;
        },
    },
});
