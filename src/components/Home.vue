<template>
    <div>
        <div id="image">
            <img v-bind:src="homeImage" style="width:100%;height:500px">
            <p id="word">Don't suffer in this alone.<br>Tell us about you,<br>
            and we will help you.</p>
        </div>
        <div id = "direction">
        <p>Check out the grants you are eligible for by filling out the survey in the "For You" page!</p>
        </div>
        <h2>The Number of Grants Available by Eligibility</h2>
        <div id = "doughnut">
            <NatureOfWork></NatureOfWork>
            <EffectsOfCovid></EffectsOfCovid>
        </div>
        <br>
        <h2>Global and Singapore Data on Covid-19 </h2>
        <div id = 'axios'><Covid19data></Covid19data></div>
    </div>
</template>
<script>

import NatureOfWork from '../components/NatureOfWork.vue'
import EffectsOfCovid from '../components/EffectsOfCovid.vue'
import Covid19data from '../components/Axios.vue'
export default {
    components:{
        NatureOfWork,
        EffectsOfCovid,
        Covid19data
    },
    data(){
        return{
            homeImage:"https://cdn.pixabay.com/photo/2016/10/08/00/16/gradient-1722840_1280.jpg"
        }
    }
}
</script>
<style scoped>
#image{
    position: relative;
    text-align:inherit;
}
#word{
    position:absolute;
    top:0px;
    left:350px;
    font-size: 40px;
    font-family: fantasy;
    color:black;
}
h2{
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
#direction{
    font-size: 15px;
    text-align: center;
}
</style>