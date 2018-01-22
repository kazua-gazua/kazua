<template>
    <div id="wrapper">
        <app-menu></app-menu>
        <div id="page-wrapper" style="min-height: 691px;">
            <div class="row">
                <nuxt/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">


import Vue from "vue";
import Component from "nuxt-class-component"
import AppMenu from "~components/AppMenu.vue"
import { State, Getter } from "vuex-class"

@Component({
  components: {
    AppMenu
  }
})
export default class extends Vue { 
}
</script>
