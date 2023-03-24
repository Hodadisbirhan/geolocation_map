<template>
  <div class="w-full h-[30rem] mt-9">
    Index
    <v-geo-location-map
      :center="{ lat: lat, lng: long }"
      :maxZoom="19"
      :information="[
        {
          id: 1,
          isPersistenceTooltip: true,
          lat: 13.0,
          lng: 3.0,
          tooltip: {
            name: 'customer',
            phone: '086472764',
            email: 'kebed@gmail.com',
          },
        },
        {
          id: 1,
          isPersistenceTooltip: true,
          lat: 19.0,
          lng: 3.0,
          tooltip: {
            name: 'customer',
            phone: '097463764',
            email: 'abebe@gmail.com',
          },
        },
      ]"
      :polylinePoints="polyline"
      polylineColor="#0000FF"
    >
      <!-- <template #tooltip="{ tooltip }">
        <div class="w-[10rem h-5rem]">
          <h1>name {{ tooltip.name }}</h1>
          <p>Phone {{ tooltip.phone }}</p>
          <span>email {{ tooltip.email }}</span>
        </div>
      </template> -->

      <template #popupPolyline="{ popup_data }">
        <div>{{ popup_data }}</div>
      </template>

      <template #tooltipPolyline="{ tooltip_data }">
        <span>{{ tooltip_data }}</span>
      </template>
    </v-geo-location-map>

    <button @click="update_the">Update Location</button>
  </div>
</template>

<script setup lang="ts">
const lat = ref(11.5977);
const long = ref(37.3955);

const update_the = () => {
  lat.value = 90;
  long.value = 90;
};

const getPosition = (position: any) => {
  console.log(position);

  lat.value = position.coords.latitude;
  long.value = position.coords.longitude;
};
onMounted(() => {
  navigator.geolocation.getCurrentPosition(getPosition);
});

const info = ref([
  {
    id: "34",
    name: "Demelash",
    type: "Customer",
    lat: 11.5977,
    long: 37.3955,
  },
  {
    id: "2",
    name: "Beniyiam",
    type: "Beletu",
    lat: 11.5936,
    long: 36.3439,
  },
  {
    id: "8",
    name: "Micke",
    type: "Alibele",
    lat: 11.324,
    long: 31.3955,
  },
]);

const polyline = [
  {
    lat: 11.334852,
    lng: 37.509485,
    tooltip: "A man Who know that",
    popup_info: "Here is the poup",
  },
  {
    lat: 11.342596,
    lng: 37.328731,
    tooltip: "A man Who know Second Man",
    popup_info: "Here is the Second Man",
  },
  {
    lat: 11.234787,
    lng: 37.358337,
    tooltip: "A man Who know that fourth",
    popup_info: "Here is the poup fourth",
  },
  {
    lat: 11.241487,
    lng: 37.190568,
    tooltip: "A man Who know third man",
    popup_info: "Here is the Third poup",
  },
];
</script>
