<template>
	<slot>
		<nav>
	    <router-link to="/">Головна</router-link> |
	    <router-link :to="{name:'friends'}">Друзі</router-link> |
	    <router-link :to="{name:'presents'}">Подарунки</router-link> |
	    <router-link :to="{name:'divider'}">Призначення подарунків</router-link>
	  </nav>
	</slot>
	<slot name="main">

	</slot>
	<footer class="">
		<div class="advertisting">Тут могла бути ваша реклама</div>
	</footer>
</template>

<script>
	export default {
		name:'MainMasterPage'
	}
</script>

<style lang="scss" scoped>
.advertisting{
	margin-top: 50px;
	padding: 30px;
	max-width: 300px;
	background-color: #eea2a2;
	border: 2px solid black;
	font-size: 20px;
	text-align: center;
}
</style>