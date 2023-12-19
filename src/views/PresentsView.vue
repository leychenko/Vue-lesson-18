<template>
	<main-master-page>
		<template #main>
			<h3>Список друзів :</h3>
		<div v-for="(item,index) in presentsList" :key="item.id" class="line">
			<div class="line__item">{{index +1}}. {{item.title}}</div>
			<button type="button" class="line__button" @click="deletePresent(item.id)">Видалити</button>
		</div>
		<div class="form">
			<label>Новий подарунок</label>
			<input v-model="present.title" type="text" class="form__input">
			<button type="button" class="form__button" @click="onAddNewPresent(present)">Додати подарунок</button>
		</div>
		</template>
	</main-master-page>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue';
import { mapState,mapActions } from 'pinia';
import {usePresentsStore} from '@/store/presents.js';

	export default {
		name:'PresentsView',
		components: {
			MainMasterPage,
		},
				data() {
			return {
				present: {}
			}
		},
		computed: {
			...mapState(usePresentsStore,['presentsList']),
			
		},
		methods: {
			...mapActions(usePresentsStore,['deletePresent','addNewPresent']),
			onAddNewPresent(friend){
				this.addNewPresent(friend)
				this.present = {}
			}
		},
	}
</script>

<style lang="scss" scoped>
.line {
	max-width: 300px;
	display: flex;
	padding: 5px;
	
	justify-content: space-between;
	font-size: 22px;
	&:not(:last-child) {
		margin-bottom: 10px;
	}
		// .line__item
		&__item {
			

		}
		// .line__button
		&__button {
			font-size: 16px;
			padding: 5px;
		}
}
.form {
	border: 3px solid black;
	max-width: 500px;
	padding: 10px;
	display: flex;
	align-items: center;
	gap: 15px;
	font-size: 18px;
		// .form__input
		&__input {
			padding: 5px;
			border-radius: 5px;
		}
		// .form__button
		&__button {
			padding: 5px 10px;
		}
}
</style>