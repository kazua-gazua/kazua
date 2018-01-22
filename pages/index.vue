<template>
  <div>
    Index
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component"
import Hello from "~components/Hello.vue"
import { State, Getter } from "vuex-class"

@Component({
  components: {
    Hello
  }
})
export default class extends Vue { 
}
</script>