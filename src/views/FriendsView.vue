<template>
  <main-master-page>
	<template #main>
		<h3>Список друзів :</h3>
		<div v-for="(item,index) in friendsList" :key="item.id" class="line">
			<div class="line__item">{{index +1}}. {{item.name}}</div>
			<button type="button" class="line__button" @click="deleteFriend(item.id)">Видалити</button>
		</div>
		<div class="form">
			<label>Новий друг</label>
			<input v-model="friend.name" type="text" class="form__input">
			<button type="button" class="form__button" @click="onAddFriend(friend)">Додати друга</button>
		</div>
	</template>
  </main-master-page>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue';
import { mapState,mapActions } from 'pinia';
import {useFriendsStore} from '@/store/friends.js';
export default {
  name: "FriendsView",
    components: {
	MainMasterPage,
  },
  data() {
	return {
		friend: {}
	}
  },
  computed: {
	...mapState(useFriendsStore,['friendsList'])
  },
  methods: {
	...mapActions(useFriendsStore,['deleteFriend','addNewFriend']),
	onAddFriend(friend){
		this.addNewFriend(friend)
		this.friend = {}
	}
  },
};
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


