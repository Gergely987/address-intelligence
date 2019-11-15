<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>Your todo list:</h3>
                <List :listItems="$store.state.todos" />
                <nav class="nav nav-pills">
                    <nuxt-link to="/" class="nav-link active">Edit list</nuxt-link>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import List from '~/components/List'

export default {
    components: {
        List
    }
}
</script>