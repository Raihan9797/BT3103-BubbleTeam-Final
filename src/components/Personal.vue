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
                <p class = "info">Apply here:
                    <span v-bind:href="grant.detail">website</span>
                </p>
            </li>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        grantsList:{
            Type:Array
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