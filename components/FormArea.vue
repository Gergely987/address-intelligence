<template>
    <form>
        <div v-for="(item, index) in $store.state.todos" v-bind:key="index" class="form-group">
            <InputField :item="item" :index="index" />
        </div>
        <div class="form-group">
            <div>
                <input type="text" class="form-control" v-model="newValue" @keyup.enter="addNewValue" ref="newValue">
            </div>
        </div>
    </form>
</template>

<script>
import InputField from '~/components/InputField.vue'

export default {
    name: 'FormArea',
    components: {
        InputField
    },
    data () {
        return {
            newValue: ''
        }
    },
    methods: {
        addNewValue (e) {
            // save new value
            this.$store.dispatch('addField', this.newValue);
            // clear field
            this.newValue = '';
        }
    },
    mounted () {
        this.$refs.newValue.focus();
    }
}
</script>