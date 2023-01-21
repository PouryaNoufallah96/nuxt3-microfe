  
  <script setup lang="ts">
  import {  defineAsyncComponent } from 'vue'

  // eslint-disable-next-line vue/one-component-per-file
  const Navbar = defineAsyncComponent(() => import('remote/navbar'));
  

  </script>
  
<template>
    <div>
      <h1>This is a full app using an imported component from remote</h1>
  <client-only>
  
          <navbar/>
  </client-only>
  
  
    </div>
  </template>

  