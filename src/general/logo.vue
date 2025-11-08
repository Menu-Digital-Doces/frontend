<script setup>
import { useTheme } from './useTheme';
const { currentTheme } = useTheme();
</script>

<template>
    <img v-if="currentTheme === 'light'" class="logo-cris" src="../assets/logo.png" alt="">
    <img v-if="currentTheme === 'dark'" class="logo-cris" src="../assets/logo-branca.png" alt="">
</template>

<style lang="scss">
    .logo-cris{
        width: 60px;
    }
</style>

