<template>
  <q-page class="doc-page">
    <div class="text-right">
      <a href="https://github.com/wranarobert/QDataTable" target="_blank"
        >QDataTable GitHub</a
      >
    </div>
    <h1 class="doc-heading doc-h1">QDataTable</h1>
    <p>
      The QDataTable is a wrapper/adapter component of a QTable component, that
      adds the form functionality to the table row with various types of inputs.
    </p>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DocumentationPage extends Vue {}
</script>

<style scoped>
.doc-page {
  padding: 16px 46px;
  font-weight: 300;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.doc-heading {
  color: #1976d2;
  cursor: pointer;
}

.doc-h1 {
  font-size: 2rem;
  line-height: 2rem;
  padding: 1rem 0;
  font-weight: 500;
  margin: 0 0 2rem;
}
</style>
