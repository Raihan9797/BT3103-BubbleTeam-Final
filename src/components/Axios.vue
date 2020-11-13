<template>
    <div id="main">
         <div id="chart">
            <COVID19data></COVID19data>
        </div>
    </div>
</template>

<script>
import COVID19data from '../CovidData.js'
export default {
    components:{
        COVID19data
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:240px;
  width:300px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 60px;
  padding-right: 100px;
  float:left;
}
</style>