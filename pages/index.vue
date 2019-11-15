<template>
  <div class="container">
    <div class="row">
        <div class="col">
            <h3>Edit your todo list:</h3>
            <FormArea />
            <nav class="nav nav-pills">
                <nuxt-link to="/listPage" class="nav-link active">View list</nuxt-link>
            </nav>
        </div>
    </div>
  </div>
</template>

<script>
import FormArea from '~/components/FormArea.vue'

export default {
  components: {
    FormArea
  }
}
</script>
