<template>
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.html">TEST</a>
                </div>
    
                <div class="navbar-default sidebar" role="navigation">
                    <div class="sidebar-nav navbar-collapse">
                        <ul class="nav" id="side-menu">
                            <li>
                                <a href="index.html"><i class="fa fa-dashboard fa-fw"></i> Preview</a>
                            </li>

                            <li>
                                <a href="index.html"><i class="fa fa-dashboard fa-fw"></i> Setting</a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-bar-chart-o fa-fw"></i> Charts<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level collapse">
                                    <li>
                                        <a href="flot.html">Flot Charts</a>
                                    </li>
                                    <li>
                                        <a href="morris.html">Morris.js Charts</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "nuxt-class-component"

@Component({name:'AppMenu'})
export default class AppMenu extends Vue {
}
</script>

<style>
    h1{
        font-size: 16px;
    }
</style>