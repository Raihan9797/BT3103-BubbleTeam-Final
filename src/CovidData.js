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
              label: 'Global COVID-19 Data',
               data:[],
              borderWidth:0.1,
              borderColor:"pink",
              backgroundColor:'pink',
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
        this.results=response.data.Global
        console.log(this.results)
        for(let key in this.results){
            this.chartdata.datasets[0].data.push(this.results[key])
            this.chartdata.labels.push(key+'')
        }
        this.renderChart(this.chartdata,this.options)
    }).catch(error => console.log(error))
    
    }
    
    },
     mounted(){
        //console.log('Do I come here')
        this.fetchData()
        
     }

    
    
    
}