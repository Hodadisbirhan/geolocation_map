<template>
  <div class="pt-[3rem]">
    <ul class="w-full flex flex-row gap-4 text-sm pb-1">
      <li><NuxtLink :to="{ hash: '#current' }">Current</NuxtLink></li>
      <li><NuxtLink :to="{ hash: '#completed' }">Completed</NuxtLink></li>
      <li><NuxtLink :to="{ hash: '#incomplete' }">Incomplate</NuxtLink></li>
      <li><NuxtLink :to="{ hash: '#history' }">History</NuxtLink></li>
    </ul>

    <div class="w-full shadow-sm">
      <v-table
        :body="body"
        :item-i-d="itemID"
        :headers="headers"
        body-class="py-[1rem] px-2"
        header-class="py-2 px-2 "
        :is-checked="true"
        class="text-sm text-left text-gray/70"
        @select:row="selectedRows"
        @click:row="clickedRow"
      >
        <template #first_name="{ item }">
          <div>
            {{ item.first_name }}
          </div>
        </template>
        <template #last_name="{ item }">
          <div>
            {{ item.last_name }}
          </div>
        </template>

        <template #email="{ item }">
          <div>
            {{ item.email }}
          </div>
        </template>
        <template #status="{ item }">
          <div
            class="w-fit"
            :class="{
              'rounded-xl bg-green-800/50 px-1 ': item.status === 'completed',
              'rounded-xl px-1 bg-yellow-800/50': item.status === 'incomplete',
            }"
          >
            {{ item.status }}
          </div>
        </template>
        <template #action="{ item }">
          <div class="cursor-pointer w-fit">
            <drop-dawn
              :list="[
                { name: 'edit', value: 'Edit' },
                { name: 'delete', value: 'Delete' },
              ]"
            >
              <template #button>
                <Icon
                  name="uil:ellipsis-h"
                  class="w-4 h-4 text-lg"
                  size="83"
                ></Icon>
              </template>
            </drop-dawn>
          </div>
        </template>
      </v-table>
    </div>
    <button class="px-5 py-3 rounded-md bg-primary" @click="handle">
      Ready Pay
    </button>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const routeComputed = computed(() => {
  return route.hash;
});








const itemID = [1, 2, 3, 4, 5];
const headers = [
  { text: "First Name", value: "first_name" },
  { text: "Last Name", value: "last_name" },
  { text: "Email", value: "email" },
  { text: "Status", value: "status" },
  { text: "action", value: "action" },
];

const body = [
  {
    id: 1,
    first_name: "hodadis",
    last_name: "Birhan",
    email: "hodadis@gmail.com",
    status: "completed",
    action: "action",
  },
  {
    id: 2,
    first_name: "hodadis",
    last_name: "Birhan",
    email: "hodadis@gmail.com",
    status: "completed",
    action: "action",
  },
  {
    id: 3,
    first_name: "hodadis",
    last_name: "Birhan",
    email: "hodadis@gmail.com",
    status: "incomplete",
    action: "action",
  },
  {
    id: 4,
    first_name: "hodadis",
    last_name: "Birhan",
    email: "hodadis@gmail.com",
    status: "completed",
    action: "action",
  },
  {
    id: 5,
    first_name: "hodadis",
    last_name: "Birhan",
    email: "hodadis@gmail.com",
    status: "completed",
    action: "d",
  },
];

const selectedRows = (value: any) => {
  console.log(value);
};

const clickedRow = (value: any) => {
  console.log(value);
};

const handle = async () => {
  $fetch(" http://127.0.0.1:4000/api/pay", {
    method: "POST",
    body: {
      description: "728748hdjsdj83y43iy4hdhsdjshu3y483i",
      first_name: "Hodadis",
      last_name: "Birhan",
      currency: "ETB",
      email: "hodadisbirhan80@gmail.com",
      amount: "2000",
    },
  })
    .then((result) => {
      console.log(result);
      window.location.href = result?.url;
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
