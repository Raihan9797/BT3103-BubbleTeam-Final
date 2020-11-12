<template>
    <footer>
        <div id="info">
            <p><i>Contact us at</i><br>
            <i>Phone number: +65 12345678</i><br>
            <i>Email address: 123456@gmail.com</i><br>
            </p>
        </div>
        <div id="copyright"><p>Copyright@BT3103</p></div>
        <br>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
footer{
    background-color: violet;
}
#copyright{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
}
#info{
    left:10px;
    top:10px;
    font-size: 25px;
    color:black;
    text-align: left;
    position: relative;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>