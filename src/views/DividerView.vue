<template>
	<main-master-page>
		<template #main>
			<h2>Розподіл подарунків</h2>
			<div v-if="dividerList" class="result">
				<div v-for="(item,index) in dividerList" :key="item.id" class="dividers">{{index+1}}. {{item.friendName}} - {{item.presentTitle}}</div>
			</div>
			<div >
				<div class="container-select">
					<div class="select">
						<label class="select__label">Друг</label>
						<select v-model="dividerObj.friendName">
							<option  v-for="item in friendsList" :key="item.id">{{item.name}}</option>
						</select>
					</div>
					<div class="select">
						<label class="select__label">Подарунок</label>
						<select v-model="dividerObj.presentTitle">
							<option  v-for="item in presentsList" :key="item.id">{{item.title}}</option>
						</select>
					</div>
					<button type="button" class="select__button" @click="addDividers">Додати</button>
				</div>
				<div v-if="message" class="message">{{message}}</div>
			</div>
		</template>
	</main-master-page>
</template>

<script>
import {mapState,mapActions} from 'pinia';
import MainMasterPage from '@/masterpages/MainMasterPage.vue';
import {useFriendsStore} from '@/store/friends';
import {useDividerStore} from '@/store/divider';
import {usePresentsStore} from '@/store/presents';
	export default {
    name: 'DividerView',
    components: { MainMasterPage },
	 data() {
		return {
			dividerObj: {},
			message:null
		}
	 },
	 computed: {
		...mapState(useFriendsStore,['friendsList']),
		...mapState(usePresentsStore,['presentsList']),
		...mapState(useDividerStore,['dividerList'])
	 },
	 methods: {
		...mapActions(useDividerStore,['addNewDivider']),
		addDividers(){
			if(!this.dividerObj.friendName || !this.dividerObj.presentTitle)
			this.message = 'Заповніть будьласка всі поля'
		else {this.addNewDivider(this.dividerObj)
			this.dividerObj = {}
			this.message = null
		}
		}
	 },
}
</script>

<style lang="scss" scoped>
.container-select{
	max-width: 400px;
	border: 1px solid black;
	padding: 10px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.message{
	color: red;

}
.result{
	padding: 30px 0;
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.dividers{
	font-size: 22px;
	font-weight: 700;
}
.select {
	font-size: 20px;
display: flex;
flex-direction: column;
align-items: center;
option{
	font-size: 18px;
}
		// .select__label
		&__label {
		}
		// .select__button
		&__button {
			border: none;
			border-radius: 5px;
			padding: 10px 15px;
			background-color: #44efbf;
			align-self: flex-end;
			font-size: 16px;
		}
}


</style>