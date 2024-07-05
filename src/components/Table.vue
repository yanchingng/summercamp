<template>
  <div class="row" style="background-color: #E6E0FF">
    <q-table
      flat bordered
      :rows="rows"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
      style="width: 100%; max-width: 100vw"
      class="bg-red-2"
    >

      <template v-slot:top>
        <h6>My Favorite Food is healthy?</h6>
        <q-space/>
        <q-input dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-input>
      </template>

    </q-table>
  </div>

</template>

<script>
import {ref} from 'vue'

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  {name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true},
  {name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true},
  {name: 'carbs', label: 'Carbs (g)', field: 'carbs'},
  {name: 'protein', label: 'Protein (g)', field: 'protein'},
  {name: 'sodium', label: 'Sodium (mg)', field: 'sodium'},
  {
    name: 'calcium',
    label: 'Calcium (%)',
    field: 'calcium',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)}
]

const originalRows = [
  {
    name: 'Frozen Yogurt',
    calories:0,
    fat:0,
    carbs:0,
    protein:0,
    sodium:0,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  },
  {
    name: 'Brownie',
    calories: 320,
    fat: 15.0,
    carbs: 45,
    protein: 3.5,
    sodium: 220,
    calcium: '4%',
    iron: '12%'
  },
  {
    name: 'Cheesecake',
    calories: 410,
    fat: 24.0,
    carbs: 34,
    protein: 5.0,
    sodium: 380,
    calcium: '10%',
    iron: '6%'
  },
  {
    name: 'Pancake',
    calories: 220,
    fat: 5.0,
    carbs: 40,
    protein: 6.0,
    sodium: 500,
    calcium: '8%',
    iron: '10%'
  },
  {
    name: 'Waffle',
    calories: 290,
    fat: 11.0,
    carbs: 37,
    protein: 7.0,
    sodium: 310,
    calcium: '6%',
    iron: '15%'
  },
  {
    name: 'Apple Pie',
    calories: 350,
    fat: 17.0,
    carbs: 48,
    protein: 2.0,
    sodium: 240,
    calcium: '2%',
    iron: '8%'
  },
  {
    name: 'Banana Bread',
    calories: 210,
    fat: 9.0,
    carbs: 29,
    protein: 3.0,
    sodium: 150,
    calcium: '4%',
    iron: '6%'
  },
  {
    name: 'Muffin',
    calories: 400,
    fat: 18.0,
    carbs: 55,
    protein: 5.0,
    sodium: 340,
    calcium: '10%',
    iron: '8%'
  },
  {
    name: 'Fruit Tart',
    calories: 280,
    fat: 12.0,
    carbs: 35,
    protein: 4.0,
    sodium: 190,
    calcium: '6%',
    iron: '4%'
  },
  {
    name: 'Chocolate Chip Cookie',
    calories: 220,
    fat: 11.0,
    carbs: 30,
    protein: 2.0,
    sodium: 170,
    calcium: '2%',
    iron: '6%'
  },
  {
    name: 'Macaron',
    calories: 70,
    fat: 4.0,
    carbs: 8,
    protein: 1.0,
    sodium: 15,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Tiramisu',
    calories: 240,
    fat: 15.0,
    carbs: 22,
    protein: 4.0,
    sodium: 120,
    calcium: '4%',
    iron: '6%'
  },
  {
    name: 'Baklava',
    calories: 290,
    fat: 18.0,
    carbs: 32,
    protein: 3.0,
    sodium: 100,
    calcium: '4%',
    iron: '6%'
  },
  {
    name: 'Petit Four',
    calories: 160,
    fat: 7.0,
    carbs: 22,
    protein: 2.0,
    sodium: 90,
    calcium: '2%',
    iron: '4%'
  },
  {
    name: 'Cannoli',
    calories: 210,
    fat: 10.0,
    carbs: 26,
    protein: 4.0,
    sodium: 80,
    calcium: '4%',
    iron: '6%'
  },
  {
    name: 'Crème Brûlée',
    calories: 220,
    fat: 12.0,
    carbs: 25,
    protein: 4.0,
    sodium: 60,
    calcium: '8%',
    iron: '4%'
  },
  {
    name: 'Pavlova',
    calories: 150,
    fat: 0.5,
    carbs: 36,
    protein: 2.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Scone',
    calories: 280,
    fat: 13.0,
    carbs: 35,
    protein: 4.0,
    sodium: 320,
    calcium: '2%',
    iron: '8%'
  },
]

export default {
  setup() {
    const loading = ref(false)
    const filter = ref('')
    const rowCount = ref(10)
    const rows = ref([...originalRows])

    return {
      columns,
      rows,

      loading,
      filter,
      rowCount,

      // emulate fetching data from server
      addRow() {
        loading.value = true
        setTimeout(() => {
          const
            index = Math.floor(Math.random() * (rows.value.length + 1)),
            row = originalRows[Math.floor(Math.random() * originalRows.length)]

          if (rows.value.length === 0) {
            rowCount.value = 0
          }

          row.id = ++rowCount.value
          const newRow = {...row} // extend({}, row, { name: `${row.name} (${row.__count})` })
          rows.value = [...rows.value.slice(0, index), newRow, ...rows.value.slice(index)]
          loading.value = false
        }, 500)
      },

      removeRow() {
        loading.value = true
        setTimeout(() => {
          const index = Math.floor(Math.random() * rows.value.length)
          rows.value = [...rows.value.slice(0, index), ...rows.value.slice(index + 1)]
          loading.value = false
        }, 500)
      }
    }
  }
}
</script>
