<template>
  <div id="app" class = "background">
    <NatureOfWork></NatureOfWork>
    <EffectsOfCovid></EffectsOfCovid>
    <Covid19data></Covid19data>
    <ul>
          <li class = "grant" v-for="grant in grantsList" v-bind:key="grant.name">
              <div id = "name"><p><b>{{ grant.name }}</b></p></div>
              <div id="rest">
                  <p id = "info"><b>Detail: {{ grant.grantInfo }}</b> </p>
                  <hr>
                  <p class = "others"><b>Grant Amount:</b> {{grant.grantAmount}}</p>
                  <p class = "others"><b>Application Deadline:</b> {{ grant.date}} </p>
                  <p class = "others"><b>MAX AMOUNT:</b> S${{ grant.maxAmt}} </p>
                  <button v-on:click ="open(grant.apply)">Apply</button>
              </div>
              <br>
          </li>
    </ul>
  </div>
</template>

<script>
import database from '../firebase.js'
import NatureOfWork from '../components/NatureOfWork.vue'
import EffectsOfCovid from '../components/EffectsOfCovid.vue'
import Covid19data from '../components/Axios.vue'

export default {
  components: {
    NatureOfWork,
    EffectsOfCovid,
    Covid19data
  },
  data(){
    return{
      grantsList:[]
    }
  },
  methods:{
    fetchItems:function(){
      database.collection('Grants').get().then((querySnapShot)=>{
        querySnapShot.forEach(doc=>{
            let grant={}
            doc=doc.data()
            grant.name=doc.Name
            grant.grantInfo = doc.GrantInfo
            grant.grantAmount = doc.GrantAmount
            grant.detail = doc.Detail
            grant.apply = doc.Apply
            grant.maxAmt = doc.maxAmt
            grant.date=doc.Date
            console.log(grant)
            grant.show=false
            this.grantsList.push(grant)      
        })
      })
    },
    open:function(link){
      window.open(link)
    }
	},
	created(){
    this.fetchItems()
    
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background:rgb(122, 63, 100);
    padding:10px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
}
h1{
    color:ivory
}
h2{
  text-align: center
}
#itemsList{
    width: 100%;
    max-width: 1200px;
    margin: 30px auto;
    padding: 0 5px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
img{
  width:150px;
  height: 150px;
}
.grant{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: left;
    padding: 10px;
    border: 1px solid #222;
    margin: 10px;
    display:block;
    position: relative;
    background-color:white;
}
#name{ 
    height:80px;
    width:100%;
    font-size: 30px;
    font-style:initial;
    color:white;
    background-color: violet;
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
#rest{
    font-size: 20px;
}
#info{
    font-size:25px;
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
    bottom: 10px;
    left:40%;
    position:absolute;
}
.background{
    background-color:mediumpurple;
}
</style>