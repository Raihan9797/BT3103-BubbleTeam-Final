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
            <p v-show="submitted==1">Your response has been submitted. Thank you!</p>
            <forYou v-bind:grantsList='grants'></forYou>
            <br>
            <br>
        </div>
    </div>
</template>
<script>
console.log('2')
import Grants from '../firebase.js'
import Personal from "./Personal.vue"
export default {
    components:{
        'forYou':Personal
    },
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
            submitted:0,
            grants:[]
        }
    },
    methods:{
        change(){
            if (this.current().response == "") {
                alert("Please choose one response")
            } else {
                if (this.current().action == "Next Question") {
                    this.index = this.index + 1
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
                    console.log('hi')
                    Grants.collection('Grants').get().then((querySnapShot)=>{
                        console.log('firebase')
                        querySnapShot.forEach(doc=>{
                            var grant={}
                            doc = doc.data()
                            console.log(doc.Name)
                            if (doc.Citizenship[0] == "Anything" || doc.Citizenship.includes(user.citizenship)) {
                                console.log('citizen')
                                if (doc.AgeLimit == 0 || user.age <= doc.AgeLimit){
                                    console.log('age')
                                    if (doc.NatureOfWork[0] == "Anything" || doc.NatureOfWork.includes(user.work)) {
                                        console.log('work')
                                        if (doc.ParentOrNot == "Anything" || doc.ParentOrNot == user.parenthood) {
                                            console.log('parent')
                                            if (doc.TotalMonthlyIncome == 0 || user.income <= doc.TotalMonthlyIncome) {
                                                console.log('income')
                                                if (doc.TypeOfProperty[0] == "Anything" || doc.TypeOfProperty.includes(user.property)) {
                                                    console.log('property')
                                                    if (doc.EffectOfCovid[0] == "Anything" || doc.EffectOfCovid.includes(user.impact)) {
                                                        console.log('effect')
                                                        grant.apply = doc.Apply
                                                        grant.date = doc.Date
                                                        grant.detail = doc.Detail
                                                        grant.amount = doc.GrantAmount
                                                        grant.info = doc.GrantInfo
                                                        grant.name = doc.Name
                                                        grant.maxamt = doc.maxAmt
                                                        this.grants.push(grant)
                                                        console.log(grant)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } 
                            }
                        })
                    })
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
            return questions[this.index]
        }
    }
}
</script>
<style scoped>
#image{
    height:700px;
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