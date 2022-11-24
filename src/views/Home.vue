<script setup lang="ts">
const count = ref(0)
const add = () => count.value++
</script>

<template>
	<div class="text-center">
		<p>Home: {{ count }}</p>
		<button class="btn" @click="add">Count</button>
	</div>
</template>
