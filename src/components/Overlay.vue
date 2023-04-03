<script setup>
import { ref } from 'vue'
const emits = defineEmits()
const onClickOverlay = () => {
  // emit v-model
  emits('update:show', false)
}

defineProps({
  show: Boolean,
})
</script>

<template>
  <div v-if="show" class="wikimoe-overlay-body" @click.self="onClickOverlay">
    <div class="wikimoe-overlay-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.wikimoe-overlay-body {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
