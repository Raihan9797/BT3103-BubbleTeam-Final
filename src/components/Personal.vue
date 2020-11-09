<template>
    <div>
        <br>
        <br>
        <p>The grants you are eligible for are:</p><br>
        <div id="grantsList">
            <li class = "grant" v-for="grant in grantsList" v-bind:key="grant.name">
                <p class = "info">Name: {{ grant.name }}</p>
                <p class = "info">Information: {{ grant.info }} </p>
                <p class = "info">Grant Amount: {{grant.amount}} </p>
                <p class = "info">Application Deadline: {{ grant.date}} </p>
                <p class = "info">MAX AMOUNT: {{ grant.maxamt}} </p>
                <p class = "info">Apply here:
                    <span v-bind:href="grant.detail">website</span>
                </p>
                <input type="checkbox" id='checkbox' v-on:change="getGrantAmount(grant)" v-model="grant.checked">
                <label for="checkbox">Are you applying for this grant?</label>
            </li>

            <div id = 'calc'>
                <p>Amount to Claim: {{sum}}</p>
                <p>Maximum amount claimable: {{getTotalAmount()}}</p>
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
            sum: 0,
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
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 10px;
    border: 1px solid #222;
    margin: 10px;
}
#info{

}
</style>