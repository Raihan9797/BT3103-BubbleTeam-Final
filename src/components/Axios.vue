<template>
    <div id="main">
         <div id="chart">
            <COVID19data></COVID19data>
            <CovidSG></CovidSG>
        </div>
    </div>
</template>

<script>
//import COVID19data from '../CovidData.js'
import CovidSG from '../CovidSG.js'
export default {
    components:{
        //COVID19data,CovidSG
        CovidSG
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
    float: middle;
    display:block;
    margin: auto;
}
#chart{
  height:360px;
  width:450px;
  background-color: azure;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 100px;
  padding-right: 100px;
}
</style>