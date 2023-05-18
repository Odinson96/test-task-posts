<script lang="ts">
import toggleMixin from '../../mixins/toggleMixin'

export default {
  name: 'ui_modal',
  mixins: [toggleMixin]
  // props: {
  //   show: {
  //     type: Boolean,
  //     default: false,
  //     required: true
  //   }
  // },
  // methods: {
  //   setModal(event: any) {
  //     event.stopPropagation()
  //     this.$emit('setVisible')
  //   }
  // }
}
</script>

<template>
  <div class="uiModal_div_all" @click="setModal" v-if="show">
    <div class="uiModal_div_content" @click="$event.stopPropagation()">
      <div @click="$event.stopPropagation()">
        <button @click="setModal" class="x-button_modal">X</button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.uiModal_div_all {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #00000081;
  position: fixed;
  display: flex;
}

.uiModal_div_content {
  margin: auto;
  background-color: #cecccc;
  border-radius: 12px;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
}

.x-button_modal {
  border-radius: 12px;
  border: none;
  width: 2vw;
  background-color: rgb(161, 38, 13);
  color: aliceblue;
}
</style>
