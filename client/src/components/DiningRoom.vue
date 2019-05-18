<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center" id="top-bar">
          <img src="@/assets/burger.png" alt="burger" />
          <h1> Eat-Da-Burger! </h1>
        </div>
        <!-- when child (Burgers) sends notification that devoured form -->
        <!-- has been submitted, call devourBurger method  and also -->
        <!--  pass burgers property as property to child (burgers) -->
        <Burgers  @devourBurger="devourBurger" :burgers="burgers"/>    
       
      </div>
    </div>
  </div>   
</template>
<script>
import Burgers from '@/components/Burgers'


export default {
  name: 'DiningRoom',
  components: {
    Burgers
  },
  props: ['burgers'],
  methods: {
    //pass through emit to this component's parent from this component's child
    devourBurger: function(customer){
      this.$emit('devourBurger', customer)
    }
  }
}
</script>

