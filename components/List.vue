<template>
    <ul class="list-group">
        <li v-for="(item, index) in listItems" v-bind:key="index" class="list-group-item">
            {{ item }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'List',
    props: {
        listItems: {
            type: Array,
            required: true
        }
    }
}
</script>
