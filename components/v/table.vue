<template>
  <div :class="supporterClass">
    <table
      class="border-collapse w-full divide-y rounded divide-primary/5 font-body"
    >
      <thead
        :class="[
          'text-sm text-gray/70 uppercase bg-gray/10 dark:bg-gray-700 dark:text-gray-400',
          theadClass,
        ]"
      >
        <tr>
          <span
            @click="allSelectFromPartialSelect"
            v-if="isChecked && isPartiallySelected"
            :class="[
              'flex justify-center py-3 items-center relative',
              headerClass,
            ]"
          >
            <input
              name="minus"
              class="cursor-pointer bg-blue-600 w-4 h-4 appearance-none rounded"
              type="checkbox"
              v-model="selectedAll"
              value="minus"
            />
            <Icon
              name="uil:minus"
              class="text-[whitesmoke] absolute top-[30%] z-10 text-base"
            />
          </span>

          <span
            v-else-if="isChecked"
            :class="['flex justify-center py-3 items-center', headerClass]"
          >
            <input
              name="all"
              class="cursor-pointer bg-gray/5 w-4 h-4 rounded"
              type="checkbox"
              v-model="selectedAll"
              @change="selectAll"
              @click="null"
              value="all"
            />
          </span>

          <th
            scope="col"
            v-for="head in headers"
            :key="head.value"
            class="text-left"
            :class="headerClass"
          >
            {{ head.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in body"
          :key="row.id"
          @click="emits('click:row', row.id)"
          :class="['border-b border-primary/5 hover:bg-gray/5  ']"
        >
          <td v-if="isChecked">
            <span
              :class="['flex justify-center py-3  items-center', bodyClass]"
            >
              <input
                type="checkbox"
                name="row"
                v-model="selectedRows"
                class="cursor-pointer w-4 h-4 rounded bg-gray/5"
                @change.stop="clickRow"
                :value="row.id"
              />
            </span>
          </td>

          <td
            v-for="head in headers"
            :key="head.value"
            class="py-2"
            :class="bodyClass"
          >
            <slot :item="row" :name="head.value"></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
interface HeaderInterface {
  value: string;
  text: string;
}
const props = defineProps({
  itemID: {
    type: Array,
    default: [],
  },
  headers: {
    type: Array<HeaderInterface>,
    default: [],
  },
  body: {
    type: [Array, Object],
    default: [],
  },
  isChecked: {
    type: Boolean,
    default: false,
  },
  bodyClass: { type: String, default: "" },
  headerClass: { type: String, default: "" },
  supporterClass: { type: String, default: "" },
  theadClass: { type: String, default: "" },
});

const emits = defineEmits(["click:row", "select:row"]);

const selectedAll: any = ref([""]);
const selectedRows: any = ref([]);

const isPartiallySelected = computed(() => {
  return (
    selectedRows.value.length > 0 &&
    selectedRows.value.length < props.itemID.length
  );
});

const selectAll = () => {
  selectedAll.value = ["all"];
  console.log(selectedAll.value.length, "length");
  if (selectedRows.value.length > 0) {
    selectedAll.value = [];
    selectedRows.value = [];
    console.log(selectedAll.value.length > 0);
    emits("select:row", selectedRows.value);
  } else {
    selectedRows.value = [...props.itemID];
    console.log(selectedRows.value);
    selectedAll.value = ["all"];
    emits("select:row", selectedRows.value);
  }
};

const allSelectFromPartialSelect = () => {
  selectedAll.value = ["all"];
  selectedRows.value = [...props.itemID];
  emits("select:row", selectedRows.value);
};

const clickRow = () => {
  if (selectedRows.value.length === props.itemID.length)
    selectedAll.value = ["all"];
  if (selectedRows.value.length > 0) emits("select:row", selectedRows.value);
};
</script>
