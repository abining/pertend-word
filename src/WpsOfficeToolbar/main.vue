<template>
  <div class="wps-shell">
    <wps-title-bar />
    <wps-quick-access />
    <wps-ribbon-tabs :active-key="activeTab" />
    <wps-ribbon-content :active-key="activeTab" />
    <div class="wps-main-area">
      <wps-left-sidebar />
      <wps-document-area />
    </div>
    <wps-status-bar />
  </div>
</template>

<script>
import WpsTitleBar from './WpsTitleBar.vue'
import WpsQuickAccess from './WpsQuickAccess.vue'
import WpsRibbonTabs from './WpsRibbonTabs.vue'
import WpsRibbonContent from './WpsRibbonContent.vue'
import WpsLeftSidebar from './WpsLeftSidebar.vue'
import WpsDocumentArea from './WpsDocumentArea.vue'
import WpsStatusBar from './WpsStatusBar.vue'

export default {
  name: 'WpsOfficeToolbar',
  components: {
    WpsTitleBar,
    WpsQuickAccess,
    WpsRibbonTabs,
    WpsRibbonContent,
    WpsLeftSidebar,
    WpsDocumentArea,
    WpsStatusBar
  },
  data() {
    return {
      activeTab: 'home'
    }
  }
}
</script>

<style scoped>
.wps-shell {
  width: 1230px;
  height: 1256px;
  margin: 0 auto;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.18);
  background: #ffffff;
  display: flex;
  flex-direction: column;
}

.wps-main-area {
  flex: 1;
  display: flex;
  min-height: 0;
}
</style>



