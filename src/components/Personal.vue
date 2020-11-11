<template>
    <div>
        <br>
        <br>
        <p id = "intro" style="font-size:30px">The grants you are eligible for are:</p>
        <div id="grantsList">
            <ul>
            <li class = "grant" v-for="grant in grantsList" v-bind:key="grant.name">
                <p id = "name"><b>Name: {{ grant.name }}</b></p>
                <div id="rest">
                    <p id = "info"><b>Detail: {{ grant.info }}</b> </p>
                    <hr>
                    <p class = "others"><b>Grant Amount:</b> {{grant.amount}}</p>
                    <p class = "others"><b>Application Deadline:</b> {{ grant.date}} </p>
                    <p class = "others"><b>MAX AMOUNT:</b> S${{ grant.maxamt}} </p>
                    <button v-on:click ="open(grant.apply)">Apply</button>
                </div>
                <br>
            </li>
            </ul>

            <div id = 'calc'>
                <p id="title"><b>The grants you have selected</b></p>
                <ol>
                    <li v-for="grant in grantsList" v-bind:key="grant.name">
                        <b>{{grant.name}}</b>         
                        <input type="checkbox" id='checkbox' v-on:change="getGrantAmount(grant)" v-model="grant.checked">
                    </li>
                </ol>
                <p id="total"><b>Maximum Total Grant Amount Estimation</b></p>
                <p id="sum"><b>S${{sum}}</b></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        grantsList:{
            Type:Array
        }
    },
    data(){
        return {
            sum: 0
        }
    },
    methods: {
        getGrantAmount(grant){
            if(grant.checked){
                console.log(grant.maxamt)
                this.sum += grant.maxamt
            } else {
                this.sum -= grant.maxamt
            }
        },
        getTotalAmount(){
            var maxsum = 0
            this.grantsList.forEach(grant => {
                maxsum += grant.maxamt
            });
            return maxsum
        },
        open:function(link){
             window.open(link)
        }
        
    }
}
</script>
<style scoped>
.grantsList{
    width: 100%;
    max-width: 1200px;
    margin: 30px auto;
    padding: 0 5px;
    box-sizing: border-box;
}
.grant{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 10px;
    border: 1px solid #222;
    margin: 10px;
    display:block;
    background-color: white;
    position: relative;
}
#name{
    height:80px;
    background-color: violet;
    width:100%;
    font-size: 30px;
    font-style:initial;
    color:white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
#rest{
    background-color: white;
    font-size: 20px;
}
#info{
    font-size:25px;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
.others{
    font-size: 20px;
    font-family: fantasy;
}
button{
    background-color: violet;
    border-radius: 50px;
    width:90px;
    height:40px;
    font-size: 20px;
    left:40%;
    bottom:1%;
    position:absolute;
}
#title{
    background-color: violet;
    font-size: 25px;
    color:white;
    text-align: left;
}
ol{
    text-align: left;
    font-size: 20px;
    font-family:serif;
}
#checkbox{
    size:40px;
}
#total{
    background-color: violet;
    font-size: 25px;
    color:white;
    text-align: left;
}
#sum{
    text-align: left;
    padding-left: 20px;
    font-size: 30px;
}
#intro{
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: slateblue;
}
</style>