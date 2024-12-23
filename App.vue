

<script setup>
import Header from './components/MainHeader.vue'
import Footer from './components/MainFooter.vue'
import GoTopBtn from './components/GoTopBtn.vue'
import AppMain from './components/appMain.vue'
import appLogin from './components/appLogin.vue'
import { useDisplay } from 'vuetify';
import { computed, reactive } from 'vue';
import AppLogin from './components/appLogin.vue'
import BasePupAlert from './base/BasePupAlert.vue'
import BasePupConfirm from './base/BasePupConfirm.vue'
const { name } = useDisplay();
const displaySize = computed(() => {
  switch (name.value) {
    case 'xs':
      return 'xs';
    case 'sm':
      return 'sm';
    case 'md':
      return 'md';
    case 'lg':
      return 'lg';
    case 'xl':
      return 'xl';
  }
  return undefined;
});

let BasePupConfirmInfo = reactive({
    toggle: true,
    text: '가상 텍스트',
    code: null
})

const movePage = (code) => {
}
</script>

<template>
<AppMain/>
</template>

<style scoped>

</style>