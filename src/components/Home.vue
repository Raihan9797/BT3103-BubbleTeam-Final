<template>
    <div>
        <div id="image">
            <img v-bind:src="homeImage" style="width:100%">
            <p id="word">Don't suffer in this alone.<br>Tell us about you,<br>
            and we will help you.</p>
        </div>
        <br><br><br>
        <div id="survey">
            <br>
            <br><br><br>
            <p id="instruction">Fill up the survey below to find out what kind of help 
the government can provide you in the Covid-19 pandemic.</p><br>
            <form action="submit" v-if="submitted==0">
                <div id = "questions">
                    <label v-html="current().question"></label><br><br>
                    <select v-model="current().response" v-show="current().type==0">
                        <option value="" selected="selected">Please select one</option>
                        <option v-for="option in current().options" v-bind:key="option" >{{option}}</option>
                    </select>
                    <input type="text" v-model="current().response" v-show="current().type==1">
                </div>
                <br>
                <button v-on:click.prevent="change">{{current().action}}</button>
            </form>
            <p v-if="submitted==1">Thank you! Your response has been submitted!</p>
            <br>
            <br>
        </div>
    </div>
</template>
<script>
console.log('2')
import users from '../firebase.js'
export default {
    data(){
        return{
            homeImage:"https://www.wm.edu/news/images/2020/photosets/heartfund-photoset/heartfund475.jpg",
            email:"",
            password:"",
            citizenship:{
                type:0,
                id:0,
                response:"",
                question:"What is your citizenship?",
                options:["Singaporean","Permanent Resident","Long Term Visit Pass","Other Pass Holder"],
                action:"Next Question"
            },
            work:{
                type:0,
                id:1,
                response:"",
                question:"What is the nature of your work?",
                options:["Employed:healthcare worker","Employed:community volunteer","Employed:others","Self-employed:car driver","Self-employed:others","Not working","Student"],
                action:"Next Question"
            },
            impact:{
                type:0,
                id:2,
                response:"",
                question:"How are you affected by COVID-19",
                options:["Lost my job due to COVID19",
                         "Lost partial of my income due to COVID19 or  an involuntary no-pay leave",
                         "I/My  household member contracted COVID19",
                         "I/My  household member was on QO/SHN/LOA",    
                         "I was on self-imposed LOA",
                         "My foreign Domestic worker was on SHN",
                         "I lost a household member in Singapore due to COVID",
                         "None of the above"],
                action:"Next Question"
            },
            age:{
                type:1,
                response:"",
                question:"What is your age?",
                action:"Next Question"
            },
            income:{
                type:1,
                response:"",
                question:"What is your total monthly household income?",
                action:"Next Question"
            },
            familySize:{
                type:1,
                response:"",
                question: "What is the number of people in your household?",
                action:"Next Question"
            },
            property:{
                type:0,
                response:"",
                question:"What type of property do you own?",
                options:["1 or 2 room HDB flat",
                         "Other HDB flat",
                         "Private property",
                         "More than 1 property",
                         "None"],
                action:"Next Question"
            },
            parenthood:{
                type:0,
                response:"",
                question:"Are you a parent of a child aged 20 or below?",
                options:["Yes","No"],
                action:"Submit"
            },
            index:0,
            submitted:0
        }
    },
    methods:{
        change(){
            console.log("Just clicked: " + this.current().question + this.current().response)
            if (this.current().response == "") {
                console.log("current response is empty: " + this.current().question + this.current().response)
                alert("Please choose one response")
            } else {
                if (this.current().action == "Next Question") {
                    console.log("current response is not empty: " + this.index + this.current().question + this.current().response)
                    this.index = this.index + 1
                    console.log("index just changed :" + this.current().question + this.current().response)
                } else {
                    let user = {}
                    user.citizenship=this.citizenship.response
                    user.email = this.email
                    user.password = this.password
                    user.work = this.work.response
                    user.age = this.age.response
                    user.impact = this.impact.response
                    user.income = this.income.response
                    user.property = this.property.response
                    user.parenthood = this.parenthood.response
                    user.familySize=this.familySize.response
                    users.collection('users').add(user)
                    alert("submitted")
                    this.email=""
                    this.password=""
                    this.citizenship.response=""
                    this.age.response=0
                    this.work.response=""
                    this.impact.response=""
                    this.income.response=0
                    this.property.response=""
                    this.parenthood.response=""
                    this.familySize.response=0
                    this.submitted = 1 
                }  
            }
        },
        current(){
            var questions=[this.citizenship,this.work,this.impact,this.age,this.income,this.familySize,this.property,this.parenthood]
            console.log("current is called: " +  this.index+questions[this.index].question + questions[this.index].response)
            return questions[this.index]
        }
    }
}
</script>
<style scoped>
#image{
    height:500px;
    position: relative;
    text-align: center;
}
#word{
    position:absolute;
    top:0px;
    left:350px;
    font-size: 30px;
    font-family: fantasy;
    color:black;
}
#survey{
    background-color:mediumpurple;
    font-size:20px;
    text-align: center
}
#instruction{
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-size: 30px;
}
#questions{
    font-style:inherit;
    font-size: 25px;
}
select{
    -webkit-appearance:inherit;
    font-size: 20px;
    font-family:serif;
    background-color:pink
}
button{
    font-size:xx-large;
    background-color:thistle;
    font-family:monospace;
    border-style:double;
    
}
</style>