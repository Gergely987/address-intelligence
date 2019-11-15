<template>
    <div>
        <input 
            type="text" 
            class="form-control" 
            v-model="value" 
            @keydown.8="deleteItem" 
            @blur="modifyItem"
        >
    </div>
</template>

<script>
export default {
    name: 'InputField',
    props: {
        item: {
            type: String,
            required: false
        },
        index: {
            type: Number,
            required: true
        }
    },
    data () {
        return {
            value: this.item
        }
    },
    watch: {
        item () {
            this.value = this.item;
        }
    },
    methods: {
        deleteItem (e) {
            this.$store.dispatch('deleteField', this.index);
        },
        modifyItem (e) {
            this.$store.dispatch('modifyField', {index: this.index, value: this.value})
        }
    }
}
</script>