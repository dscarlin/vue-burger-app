<template>
    <!--  if there are items in the burgers property (array) then render this template -->
    <div v-if="burgers" id="burgerCont">
        <!--  Area for burgers not yet devoured (left 2/3 of template)-->
      <div id="burgers" class="col-md-8 text-center ">
         <!--Iterate through all burgers in burgers property -->
        <div v-for="(burger, i) in burgers" :key="burger.id" >
          
          <div v-if="!burger.devoured" class="row">
            <div class="col-md-6">
              <div class="form-control ht100 undevoured" >{{burger.id}} . {{burger.burger_name}}</div>
            </div>
            <!--spacer -->
            <div class="col-md-1"></div>
            <!-- form for entering name of customer and allowing them to devour burger -->
            <div class="col-md-4">
              <!-- form submit calls devourBurger method and passes the index of the corresponding burger from burgers property array -->
              <form @submit.prevent="devourBurger(i)" class="devour-form button-size">
                <input input type="hidden" class="burger_id" value=${burger.id}>
                <!--input field linked to the Customer property of the corresponding burger using the index of the array access it  -->
                <input input class="customer w100" type="text" placeholder="Customer Name" v-model="burgers[i].Customer">
                <button type="submit" class="btn btn-primary buttonBorder w100">Devour it!</button>
              </form>
            </div>
             <!--spacer -->
            <div class="col-md-1"></div>
          </div>
        </div>       
      </div>

      <!-- Area for burgers that have been devoured -->
      <div id="devoured" class="col-md-4 text-center ">
        <!-- iterate through the burgers property (array) again to keep columns for each area static -->
        <div v-for="burger in burgers" :key="burger.id" >
          <!--Template for burgers that have been devoured -->
          <div v-if="burger.devoured" class="form-control devoured">
            {{burger.burger_name}}  
            <p><small>devoured by: {{burger.Customer.customer_name}}</small></p>
          </div>
        </div>
      </div>
    </div>

    
</template>
<script>
export default {
    name:"Burgers",
    props: ['burgers'],
    methods: {
      devourBurger(i){
        //sends the parent a notification that devour burger form has been submitted
        //sends along the data of the corresponding burger from burgers array using the index passed in as a parameter
        this.$emit('devourBurger', this.burgers[i]);
      }
    }
}
</script>
<style>
#burgerCont {
  display: inherit;
  width: 100%;
}
</style>

