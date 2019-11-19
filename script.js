var app = new Vue({
  el: "#app",
  data: {
    name: "kirill",
    age: 20,
    email: "kkonorev@iu.edu",
    comment: "whatever",
    submit: false,
    nameException: "",
    emailException: "",
    ageException: "",
    commentException: "",
    nameIsValid: false,
    ageIsValid: false,
    emailIsValid: false,
    example:""
  }, //end data
  
  methods:{
    validate:function(){
      
      if(this.submit){
        this.example = "Submitted";
        console.log(this.submit);
      }else{
        this.example = "not Submitted"
                console.log(this.submit);

      }
    }// end checkifSubmitted
  },//end mehtods

  computed: {
    checkSubmit: function() {
      if (this.submit) {
        return "";
      } else {
        return "";
      }
    }, //end check submit

    nameExample: function() {
      if (this.name.length < 2 || this.name.length == 0) {
        this.nameIsValid = false;
        return "Name is too short or empty";
      } else {
        this.nameIsValid = true;
        return "";
      }
    }, //end name

    ageExample: function() {
      if (this.age < 18 || this.age == "") {
        //this.ageException = "Age is under 18 or no age was input";
        this.ageIsValid = false;
        return "Age is too young or empty"
      } else {
        this.ageIsValid = true;
        return "";
      }
    }, //end age

    emailExample: function() {
      this.emailIsValid = /\S+@\S+\.\S+/.test(this.email);
      if(this.emailIsValid){
         return "";
         }else{
        return "Email is wrong";
      }
    }, //end emailExample

    checkSubmit: function() {
      if (this.emailIsValid && this.ageIsValid && this.nameIsValid) {
        this.submit = true;
      } else {
        this.submit = false;
      }
    } // end checkSubmit
  },//end computed
  
  
  
}); //end vue