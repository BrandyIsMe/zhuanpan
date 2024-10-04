<!-- <template>
  <RouterView />
  <FooterTabbar />
</template>

<script setup lang="ts">
import FooterTabbar from '@/components/FooterTabbar.vue';
</script>

<style scoped>
</style> -->

 
<script>
import { defineComponent, h } from 'vue';
import Test from './Test.vue'
export default defineComponent({
  name: 'App',
  render() {
    return h('div', {id: 'foo'}, [
       h(Test, {count: 1, class: 'bar'}),
    ]);
  }
})
</script>
    
<style scoped>
    
</style>
