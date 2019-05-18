<template>
  <div class="home">
    <!-- devour burger form submission informs this component to call devourBurger func -->
    <!-- burgers data property is passed through child (DiningRoom) to grandchild (Burgers) as prop -->
    <DiningRoom @devourBurger="devourBurger" :burgers="burgers"/>
    <!-- create burger form submission informs this component to call makeBurger func -->
    <Kitchen @makeBurger="makeBurger"/>
    
  </div>
</template>

<script>
import DiningRoom from '@/components/DiningRoom.vue';
import Kitchen from '@/components/Kitchen.vue';
//import ajax functions
import {getBurgers, createBurger, devourBurger} from '@/services/callBurger_db.js';

export default {
  name: 'home',
  components: {
    DiningRoom,
    Kitchen
  },
  data: function() {
    return {
      burgers: ''
    }
  },
  created: function() {
      this.getBurgers();
  },
  methods: {
    //update the page and verify data is in the database from get request to server
        // and find all method from sequelize joining both customer and burger models
    getBurgers: function(){
      getBurgers().then(burgers => {
        this.burgers = burgers.data;
      });
    },
    //ajax post to server and insert into burgers table using sequelize model and create method
    makeBurger: function(burgerName){
      createBurger(burgerName).then((data) => {
        this.getBurgers() 
            });
      
    },
    devourBurger: function(burger){
      //ajax post to server and insert into customers table using sequelize model and create method
      //then ajax put to server and update burgers table with boolean of devoured and foreign key 
      //of customer id using sequelize model and update method

      //make customer name blank string if null
      burger.Customer = (burger.Customer) ? burger.Customer : ''
      devourBurger(burger.id,burger.Customer).then(data => {
        this.getBurgers();
      });
    }
  }
}
</script>
