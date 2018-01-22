<template>
    <h1>Hello World...!!!</h1>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "nuxt-class-component"

@Component({name:'Hello'})
export default class Hello extends Vue {
}
</script>