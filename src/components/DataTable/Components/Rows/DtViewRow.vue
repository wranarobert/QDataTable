<template>
  <q-tr :props="props">
    <q-td v-for="column in props.cols" :key="column.name" :props="props">
      <slot
        :name="viewRowNamespace.createSlot(`${column.name}-prepend`)"
        :props="props"
      />
      <slot :name="viewRowNamespace.createSlot(column.name)" :props="props">
        <template v-if="column.name === 'actions'">
          <q-btn
            v-if="!column.edit || (column.edit && column.edit.show)"
            round
            size="sm"
            icon="edit"
            @click="$emit('openForm', props.row)"
          />
          <q-btn
            round
            size="sm"
            color="negative"
            icon="delete"
            @click="$emit('deleteRow', props.row)"
          />
        </template>
        <template v-else>
          {{ column.value }}
        </template>
      </slot>
      <slot
        :name="viewRowNamespace.createSlot(`${column.name}-append`)"
        :props="props"
      />
    </q-td>
  </q-tr>
</template>

<script>
export default {
  props: ['props'],
  inject: ['viewRowNamespace'],
};
</script>
