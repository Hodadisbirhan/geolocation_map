<template>
  <Menu :class="['relative', menuClass]" as="div">
    <MenuButton>
      <slot name="button"></slot>
    </MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        :class="[
          'absolute left-0  z-10 origin-top-right   rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none    drop-shadow-md px-3 py-2',
          menuItemsClass,
        ]"
      >
        <MenuItem
          v-slot="{ active }"
          v-for="element in list"
          :key="element.name"
         
          :class=" ['hover:bg-violet-500 hover:text-white  hover:rounded-md', menuItemClass]"
          @click="emits('select:action', element.name, element.value)"
        >
          <span class="block">
            {{ element.value }}
          </span>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { MenuButton, MenuItem, MenuItems, Menu } from "@headlessui/vue";

interface ElementInterface {
  name: string;
  value: string;
}
interface ListInterface {
  list: Array<ElementInterface>;
  menuItemClass?: string;
  menuItemsClass?: String;
  menuClass?: string;
}

const props = defineProps<ListInterface>();

const emits = defineEmits(["select:action"]);
</script>
