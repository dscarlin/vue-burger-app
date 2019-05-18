<template>
   <div class="container">
            <div class="row">
                <div class="col-md-12 text-center enter_section">
                            <!-- call makeBurger function when form submitted (default prevented) -->
                    <form class="create-form" @submit.prevent="makeBurger">
                                                    <!-- v-model dynamically updates burgerName data property  -->
                        <input type="text" class="form-control" name="burger_name" v-model="burgerName" id="enter_text">
                        <button type="submit" class="btn btn-primary" id="text-enter-button">Submit</button>
                    </form>
                    <p>Enter a burger you want to eat, then Click the "Submit" button.</p>
                </div>
            </div>
        </div>
</template>

<script>

export default {
  name: 'Kitchen',
  data: function(){
      return {
          burgerName: ""
      }
  },
  methods: {
    makeBurger: function() {
        //tell parent (Home) that the create form has been submitted
        //send the related burger name using burgerName data property
        this.$emit('makeBurger', this.burgerName)
        this.burgerName = ''
    }
  }
}
</script>

