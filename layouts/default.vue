<template>
  <div class="px-2">
    <header
      class="flex flex-col bg-green1000/50 gap-8 w-full px-2 fixed top-0 left-0 text-sm"
    >
      <div
        class="flex justify-between items-center gap-7 ml-[18rem] flex-1 border-b py-3 border-gray-light/80 backdrop-blur-sm"
      >
        <h2 class="text-xl font-bold text-slate-400">Orders</h2>
        <div class="flex gap-8">
          <span
            class="relative cursor-pointer w-[2rem] h-[2rem] rounded-[100%] bg-primary/10 flex justify-center items-center"
          >
            <span
              class="absolute -top-2 -right-1 text-sm font-semibold z-10 bg-primary text-white w-[1rem] h-[1rem] rounded-[100%] flex justify-center items-center"
              >3</span
            >
            <Icon name="uil:bell" class="text-2xl"></Icon
          ></span>
          <Menu>
            <MenuButton>
              <span class="relative"
                ><Icon name="uil:user-circle" class="text-3xl"></Icon>

                <span
                  class="flex absolute -bottom-1 -right-1 justify-center items-center rounded-[100%] bg-blue-100"
                >
                  <Icon
                    name="uil:angle-down"
                    class="font-semibold text-lg"
                  ></Icon>
                </span>
              </span>
            </MenuButton>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute z-30 right-1 top-10 mt-2 w-56 origin-top-right divide-y divide-primary/20 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="px-1 border border-b border-slate-100/30 py-1">
                  <div class="flex items-center gap-2 text-sm">
                    <span
                      class="flex justify-center w-[2rem] h-[2rem] min-w-[2rem] min-h-[2rem] items-center px-2 py-2 rounded-[100%] bg-primary/20"
                      >H</span
                    >
                    <div class="flex flex-col gap-1">
                      <p>Hodadis Birhan</p>
                      <span>hodadisbirhan80gmail.com</span>
                    </div>
                  </div>
                </div>
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <Icon
                        name="uil:user-circle"
                        :class="{ 'text-white': active }"
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                      My Account
                    </button>
                  </MenuItem>
                </div>

                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm ',
                      ]"
                    >
                      <Icon
                        name="uil:upload"
                        :class="{ 'text-white': active }"
                        class="mr-2 h-5 w-5 text-violet-400 rotate-90"
                        aria-hidden="true"
                      />
                      Logout
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>

      <nav
        class="w-[18rem] bg-gray/10 font-semibold border-r fixed flex flex-col top-0 left-0 py-6 px-[6px] h-full overflow-y-auto gap-11"
      >
        <img src="/logo.svg" class="w-[3rem] h-[2rem]" />
        <ul class="w-full gap-5 text-gray flex flex-col">
          <li class="w-full">
            <NuxtLink
              to="/"
              class="px-5 py-2 rounded-md w-full inline-block hover:text-slate-200"
              :class="[
                currentRoute.includes('index')
                  ? 'border-1 rounded-md bg-blue-500 text-slate-200'
                  : '',
              ]"
            >
              Dashboard
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="px-5 py-2 rounded-md w-full inline-block hover:text-slate-200"
              to="/order"
              :class="[
                currentRoute.includes('order')
                  ? 'border-1  bg-blue-500 text-slate-200'
                  : '',
              ]"
            >
              Order
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="px-5 py-2 w-full rounded-md inline-block hover:text-slate-200"
              to="/driver"
              :class="[
                currentRoute.includes('driver')
                  ? 'border-1  bg-blue-500 text-slate-200'
                  : '',
              ]"
            >
              Driver
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="px-5 py-2 rounded-md text-slate-600 w-full inline-block hover:text-slate-200"
              to="/review"
              :class="[
                currentRoute.includes('review')
                  ? 'border-1 rounded-md bg-blue-500 text-slate-200'
                  : '',
              ]"
            >
              Review
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="py-[3.1rem] pl-[18.3rem]">
      <slot />

      <l-map
        v-model="zoom"
        v-model:zoom="zoom"
        :options="{ zoomControl: false }"
        :center="[props.positions.lat, props.positions.lng]"
        class="z-0 w-[2rem] h-[4rem] bg-slate-500"
        :maxZoom="19"
        :use-global-leaflet="false"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-control-zoom position="bottomright"></l-control-zoom>
        <l-control-scale
          position="topright"
          :imperial="true"
          :metric="false"
        ></l-control-scale>
        <l-marker :lat-lng="[89.0, 38.0]"> </l-marker>
        <!-- <l-marker :lat-lng="[props.positions.lat, props.positions.lng]">
          <l-tooltip>
            <div class="min-h-full min-w-full px-2 pb-1 font-body">
              <div class="font-bold text-base text-black capitalize">
                {{ props.positions.name }}
              </div>
              <div
                v-if="true"
                class="border-b border-collapse border-gray-400 mt-1"
              ></div>
              <div class="font-normal mt-3 text-sm">
                <span class="text-black mr-1 font-medium">Latitude</span>
                <span class="text-primary-dark font-semibold">
                  {{ props.positions.lat }}</span
                >
                ,
                <span class="text-black mr-1 font-medium">Longitude</span>
                <span class="text-primary-dark font-semibold">
                  {{ props.positions.lng }}</span
                >
              </div>
              <div class="flex gap-2">
                <div
                  class="font-normal text-sm mt-1"
                  v-if="
                    props && props.positions && props.positions.phone_number
                  "
                >
                  <span class="text-black font-medium">Phone number :</span>
                  <span class="text-primary-dark ml-2 font-semibold">
                    {{ props.positions.phone_number }}</span
                  >
                </div>
                <div
                  class="font-normal text-sm mt-1"
                  v-if="props && props.positions && props.positions.gender"
                >
                  <span class="text-black font-medium">Gender :</span>
                  <span class="text-primary-dark ml-2 font-semibold capitalize">
                    {{ props.positions.gender }}</span
                  >
                </div>
              </div>

              <div class="flex gap-2">
                <div
                  class="font-normal text-sm mt-1"
                  v-if="props && props.positions && props.positions.group_type"
                >
                  <span class="text-black font-medium">Group name :</span>
                  <span class="text-primary-dark ml-2 font-semibold">
                    {{ props.positions.group_type }}</span
                  >
                </div>
                <div
                  class="font-normal text-sm mt-1 flex"
                  v-if="props && props.positions && props.positions.group_type"
                >
                  <p class="text-black font-medium">Value chain :</p>
                  <p
                    class="text-primary-dark ml-2 text-sm font-semibold w-28 truncate"
                  ></p>
                </div>
              </div>
              <div class="flex gap-2">
                <div
                  class="font-normal text-sm mt-1"
                  v-if="props && props.positions && props.positions.created_by"
                >
                  <span class="text-black font-medium">Created by :</span>
                  <span class="text-primary-dark ml-2 font-semibold">
                    {{ props.positions.created_by }}</span
                  >
                </div>
                <div class="font-normal text-sm mt-1">
                  <span class="text-black font-medium">Created at :</span>
                  <span class="text-primary-dark ml-2 font-semibold">
                    {{
                      format(
                        new Date(props?.positions?.created_at || new Date()),
                        "dd/MM/yyyy"
                      )
                    }}</span
                  >
                </div>
              </div>
            </div>
          </l-tooltip>
        </l-marker> -->
      </l-map>
    </main>
  </div>
</template>

<script setup>
import { MenuButton, MenuItem, MenuItems, Menu } from "@headlessui/vue";

import {
  LCircle,
  LGeoJson,
  LMap,
  LPopup,
  LMarker,
  LRectangle,
  LTooltip,
  LControlScale,
  LControlZoom,
  LCircleMarker,
  LTileLayer,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
const route = useRoute();

const currentRoute = computed(() => {
  return route.name;
});

const props = {
  positions: {
    lat: 21.2,
    lng: 23.2,
    created_by: "creator",
    created_at: new Date(),
  },
  phone_number: "0947284782",
  gender: "male",

  name: "hodadis",
  group_type: "Melon",
};

const zoom = 27;
</script>

<style scoped>
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px white;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #00a6eb;
  border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #00a6eb;
}
</style>
