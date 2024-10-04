 
<script lang='ts'>
import { defineComponent, h } from 'vue';
    export default defineComponent({
        name: 'Test',
        props: {
            count: {
                type: Number
            },
            class: {
                type: String,
            }
        },
        render(){
            return h('div', 'test--' + this.class)
        },
        setup(props) {
            console.log('props', props);
        },
    })
</script>
    
<style>
    
</style>