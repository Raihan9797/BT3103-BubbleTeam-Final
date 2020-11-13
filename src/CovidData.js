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
              borderColor:"purple",
              backgroundColor:'purple',
              fill:false
            }
          ]
          
        },
        options: {
            title:{
                display:true,
                text:'Bar Chart Example',
                fontColor:'Black',
                fontSize:15

            },
            legend:{
                position:'bottom'
            },
            layout:{
                padding:{
                    left: 5,
                    right: 5,
                    top: 0,
                    bottom: 5
                }
            },
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
        this.results=response.data.items[0].readings.Global
        console.log(response.data)
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