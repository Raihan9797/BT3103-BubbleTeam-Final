import {Bar} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Bar,
    data: () => ({
        results:[],
        chartdata: {
          labels:[],
          datasets: [
            {
              label: 'Singapore COVID-19 Data',
               data:[],
              borderWidth:0.1,
              borderColor:"blue",
              backgroundColor:'blue',
              fill:false
            }
          ]
          
        },
        options: {
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
          
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://api.covid19api.com/summary').then(response=>{
        this.results=response.data.Countries[153]
        for(let key in this.results){
            if (key == "TotalConfirmed" || key == "TotalRecovered"){
                this.chartdata.datasets[0].data.push(this.results[key])
                this.chartdata.labels.push(key+'')
            }
        }
        console.log(response.data.Countries[153])
        /*for(let key in this.results){
            if(typeof this.results[key] == 'number'){
                this.chartdata.datasets[0].data.push(this.results[key])
                this.chartdata.labels.push(key+'')
            }
        }
        */
        this.renderChart(this.chartdata,this.options)
    }).catch(error => console.log(error))
    
    }
    
    },
     mounted(){
        //console.log('Do I come here')
        this.fetchData()
     }

    }