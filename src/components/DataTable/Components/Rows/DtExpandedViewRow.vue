<template>
  <q-tr :props="props">
    <q-td colspan="100%" >
      <slot :name="viewRowNamespace.createSlot('expanded')" :props="props" />
    </q-td>
  </q-tr>
</template>

<script>
export default {
  props: ['props'],
  inject: ['viewRowNamespace'],
}
</script>
