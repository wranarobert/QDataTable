<template>
  <q-page>
    <q-data-table
      ref="table"
      title="Treats"
      :data="data"
      :columns="columns"
      :grid="$q.screen.lt.md"
      selection="multiple"
      :selected.sync="selected"
      @submitEdit="submitEdit"
    >
      <template v-slot:top-right>
        <q-btn color="primary" label="Add row" @click="openAddForm" />
      </template>
    </q-data-table>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import QDataTable from 'src/components/QDataTable/QDataTable.vue';

@Component({ components: { QDataTable } })
export default class QDataTableDemo extends Vue {
  selected = [];
  columns = [
    {
      name: 'name',
      required: true,
      label: 'Dessert (100g serving)',
      align: 'left',
      field: 'name',
      format: (val: string) => `dfdaf ${val}`,
      sortable: true,
      form: {
        type: 'input'
      }
    },
    {
      name: 'calories',
      align: 'center',
      label: 'Calories',
      field: 'calories',
      sortable: true
    },
    { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
    { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
    { name: 'protein', label: 'Protein (g)', field: 'protein' },
    { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
    {
      name: 'calcium',
      label: 'Calcium (%)',
      field: 'calcium',
      sortable: true
    },
    {
      name: 'iron',
      label: 'Iron (%)',
      field: 'iron',
      sortable: true
    },
    {
      name: 'actions',
      align: 'center'
    }
  ];
  data = [
    {
      id: 1,
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      sodium: 87,
      calcium: '14%',
      iron: '1%'
    },
    {
      id: 2,
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      sodium: 129,
      calcium: '8%',
      iron: '1%'
    }
  ];

  openAddForm() {
    (<QDataTable>this.$refs.table).openNewFormRow({
      name: 'Init add treat',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      sodium: 129,
      calcium: '8%',
      iron: '1%'
    });
  }

  submitEdit(formData: any) {
    console.log(formData);
  }

  test(props: any): string {
    console.log(props);
    return '';
  }
}
</script>
