<template>
  <main class="w-full flex flex-col items-center gap-8 py-[4rem]" v-if="price">
    <div class="gap-5 flex flex-col">
      <h1 class="text-4xl font-bold tracking-tighter text-gray-900">
        Pricing Plan For Team Of All Sizes
      </h1>

      <p class="text-lg text-gray-600">
        Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi
        iusto modi velit ut non voluptas in. Explicabo id ut laborum.
      </p>
      <div class="flex flex-row gap-4 flex-wrap">
        <article
          class="group flex flex-col gap-7 h-[30rem] w-[22rem] px-[3rem] py-[2rem] border-[2px] hover:border-primary hover:border-[3px] rounded-2xl"
          v-for="item in price"
          :key="item.id"
        >
          <div class="flex flex-row justify-between items-center">
            <h3
              class="font-semibold focus:text-blue-800 text-gray-700 text-2xl group-hover:text-primary"
            >
              Free Plan
            </h3>
            <span
              class="bg-primary/10 text-[10px] px-3 h-fit py-[3px] font-semibold flex items-center justify-center rounded-xl tracking-wide text-primary"
              >Recommended</span
            >
          </div>

          <p>A plan that scale with your rapidly growing business</p>

          <div class="text-sm text-gray-600">
            <span class="text-3xl font-extrabold"
              >{{ (item.currency + "").toUpperCase()
              }}{{ item.unit_amount }}</span
            >/{{ item.interval }}
          </div>

          <button
            class="w-full text-base py-[6px] rounded group-hover:text-white group-hover:bg-blue-800 border border-primary text-primary"
          >
            Buy Plan
          </button>
          <div class="flex flex-col gap-2 text-gray-600 text-sm">
            <span class="flex gap-2">
              <Icon name="uil:check" class="text-primary text-lg"></Icon>
              25 products
            </span>
            <span class="flex gap-2">
              <Icon name="uil:check" class="text-primary text-lg"></Icon>
              25 Advanced products
            </span>
            <span class="flex gap-2">
              <Icon name="uil:check" class="text-primary text-lg"></Icon>

              25 Analytics Feature
            </span>
            <span class="flex gap-2">
              <Icon name="uil:check" class="text-primary text-lg"></Icon>
              25 products
            </span>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const price_list = await $fetch("http://localhost:4000/prices");
console.log(price_list);

const data = price_list?.prices || [];

const price = data.map((e) => {
  
  console.log(e);
  return {
    price_id: e.id,
    status: e.active,
    currency: e.currency,
    unit_amount: e.unit_amount,
    type: "plan",
    interval: e.recurring.interval,
  };
});
</script>
