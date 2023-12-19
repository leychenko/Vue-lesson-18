<template>
  <main-master-page>
		<template #main>
			<div class="">
				<h2>Вітаємо у резиденції Миколая!!!</h2>
				<div class="">Тут ви зможете обрати подарунки для своїх друзів</div>
			</div>
		</template>
  </main-master-page>
</template>

<script>

import MainMasterPage from '@/masterpages/MainMasterPage.vue';

export default {
  name: "HomeView",
  components: {
	MainMasterPage,
  },


};
</script>
