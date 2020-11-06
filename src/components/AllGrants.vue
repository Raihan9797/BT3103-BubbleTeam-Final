<template>
  <div>
    <ul>
        <li v-for="grant in grantsList" v-bind:key="grant.name" v-on:click="grant.show = !grant.show">
            <h2>{{grant.name}}</h2>
            <h4>{{grant.grantInfo}}</h4>
            <h4>{{grant.grantAmount}}</h4>
            <button @click = grant.detail>Detail</button>&nbsp; 
            <button @click = grant.apply>Apply</button>
        </li>
    </ul>
  </div>
</template>


<script>
import database from '../firebase.js'
export default {
  
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
            grant.name=doc.Name//也可能是doc.Name
            grant.grantInfo = doc.GrantInfo
            grant.grantAmount = doc.GrantAmount
            grant.detail = doc.Detail
            grant.apply = doc.Apply
            console.log(grant)
            grant.show=false
            this.grantsList.push(grant)      
        })
      })
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
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 10px;
    border: 1px solid #222;
    margin: 10px;
}
img{
  width:150px;
  height: 150px;
}
</style>