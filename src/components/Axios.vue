<template>
    <div id="main">
         <div class="chart">
            <COVID19data></COVID19data>
         </div>
         <div class="chart">
            <CovidSG></CovidSG>
        </div>
    </div>
</template>

<script>
import COVID19data from '../CovidData.js'
import CovidSG from '../CovidSG.js'
export default {
    components:{
        //COVID19data,CovidSG
        CovidSG,COVID19data
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
    margin-left:auto;
    margin-right:auto;
}
.chart{
  height:240px;
  width:300px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 60px;
  padding-right: 60px;
  float:left;
}
</style>