<template>
    <div>
        <header>
            <nav>
            <h1>GrantoU</h1><br> 
            <div id="Pages"> 
                <router-link to="/" exact class = 'headernames'>Home</router-link>
                <router-link to="/all" exact class = 'headernames'>All Grants</router-link>
                <router-link to="/contactus" exact class = 'headernames'>Locate Us</router-link>
            </div>
            </nav>  
        </header>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    }
}
</script>
<style scoped>
    header{
        background-color:goldenrod;
        background-repeat: no-repeat;
        border-style: solid;
        border-color:black;
        border-width: 2px;
    }
    h1{
        text-align: center;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 50px;
        border-width: 2px;
    }
    div{
        display:block;
        font-size: 30px;
        padding: 10px;
    }
    .headernames{
        margin-left: 10px;
    }
</style>