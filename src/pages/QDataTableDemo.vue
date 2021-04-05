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
      @submitNew="submitAdd"
      @submitEdit="submitEdit"
      @deleteRow="deleteRow"
    >
      <template v-slot:top-right>
        <q-btn color="primary" label="Add row" @click="openAddForm" />
      </template>
      <template v-slot:expanded-row-body>
        Test expanded row
      </template>
    </q-data-table>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { uid } from 'quasar';

import QDataTable from 'src/components/QDataTable/QDataTable.vue';

@Component({ components: { QDataTable } })
export default class QDataTableDemo extends Vue {
  selected = [];
  columns = [
    {
      name: 'expand',
      align: 'center'
    },
    {
      name: 'name',
      required: true,
      label: 'Dessert (100g serving)',
      align: 'left',
      field: 'name',
      sortable: true,
      form: {
        type: 'input',
        attributes: {
          placeholder: 'Enter a treat name'
        }
      }
    },
    {
      name: 'calories',
      align: 'center',
      label: 'Calories',
      field: 'calories',
      sortable: true,
      form: {
        type: 'input',
        attributes: {
          type: 'number',
          min: 0
        }
      }
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

  get tableRef() {
    return <QDataTable>this.$refs.table;
  }

  openAddForm() {
    this.tableRef.openNewFormRow({
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
      sodium: 0,
      calcium: 0,
      iron: 0
    });
  }

  submitAdd(formData: any) {
    this.data.push({ id: uid(), ...formData });

    this.tableRef.closeNewFormRow();
  }

  submitEdit(formData: any) {
    const dataIndex = this.data.findIndex(data => data.id === formData.id);

    this.data.splice(dataIndex, 1, formData);

    this.tableRef.closeEditFormRow(formData);
  }

  deleteRow(formData: any) {
    this.$q
      .dialog({
        title: 'Confirm delete',
        message: 'Would you like to delete this record?',
        color: 'red',
        cancel: true,
        persistent: true
      })
      .onOk(() => {
        const dataIndex = this.data.findIndex(data => data.id === formData.id);

        this.data.splice(dataIndex, 1);
      });
  }
}
</script>
