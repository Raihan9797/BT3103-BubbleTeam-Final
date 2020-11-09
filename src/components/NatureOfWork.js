import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data: function () {
    return {
        datacollection: {
            labels: ["Employed – Healthcare Worker", "Employed – Frontline Worker/Community Volunteer", "Employed – Others", 
            "Self-employed – Taxi Driver/Private-hire Car Driver", "Self-employed – Healthcare/Education/Health Sectors",
            "Self-employed – Others", "I’m not working", "Student"],
            datasets: [{
                label: "Number of grants",
                backgroundColor: ["#3e95cd","#3e95cd","#3e95cd","#8e5ea2","#8e5ea2","#8e5ea2","#3cba9f","#e8c3b9"],
                data: [8,8,8,8,8,9,6,6]
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