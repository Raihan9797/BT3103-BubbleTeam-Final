import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data: function () {
    return {
        datacollection: {
            labels: ["Self - Lost my job due to COVID-19", "Self - Lost partial of my income due to COVID-19 or on involuntarily no-pay leave", "Self - I was on self-imposed LOA",
            "Family - I/My household member contracted COVID-19", "Family - I/My household member was on QO/SHN/LOA", "Family - I lost a household member in Singapore due to COVID-19",
            "Employer - My Foreign Domestic Worker (FDW) was on SHN",
            "Others"],
            datasets: [{
                label: "Number of grants",
                backgroundColor: ["#3e95cd", "#3e95cd","#3e95cd","#8e5ea2","#8e5ea2","#8e5ea2","#3cba9f","#e8c3b9"],
                data: [7,7,8,5,6,6,6,5]
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Approximate number of grants eligible'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}