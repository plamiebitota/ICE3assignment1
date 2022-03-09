const app=Vue.createApp({
 data()
 {

     return {

         age:22,
         img:"picture.jpg",
         textName:"Plamedie Bitota",
         
        
       
            }
           },


 computed: {
            
            ageInFive: function () {
             
              return this.age+ 5
            },

           randomisedNumber: function()
            {
                const randomNumber=Math.floor(Math.random()*16);

                return randomNumber;
            },
           
           
            
          }



         



 
});
app.mount('#content')