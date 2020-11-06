<template>
    <div>
        <header>
            <nav>
            <h1>GrantoU</h1><br>  
            <div id="Pages"> 
                <router-link to="/" exact>Home</router-link>
                <router-link to="/all" exact>All Grants</router-link>
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
        background-color:navajowhite;
        padding:10px;
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
</style>