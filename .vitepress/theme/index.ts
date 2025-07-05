// https://vitepress.dev/guide/custom-theme
import {h, onMounted} from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom';
import './style.css'
import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout,
  setup() {
    onMounted(() => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    });
  },
} satisfies Theme
