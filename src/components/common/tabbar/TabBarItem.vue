<template>
	<div class="tab-bar-item" @click="itemclick">
		<div v-show="!isactive">
			<slot name="item-icon"></slot>
		</div>
		<div v-show="isactive" class="item-icon-active">
			<slot name="item-icon-active"></slot>
		</div>
		<div :style="activeStyle">
			<slot name="item-text"></slot>
		</div> 
	</div>
</template>

<script>
	export default {
		data() {
			return {
			
			}
		},
		props: {
			path: String,
			activeTextColor: {
				type: String,
				default: '#d4237a'
			}
		},
		computed: {
			isactive () {
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle () {
				return this.isactive ? { color: this.activeTextColor } : {}
			}
		},
		methods: {
			itemclick () {
				// 解决重复点击报错问题
				if (this.$route.path !== this.path) {
					this.$router.replace(this.path)
				}
			}
		}
	}
</script>

<style>
	.tab-bar-item {
		text-align: center;
		font-size: 14px;
	}

	.tab-bar-item img {
		width: 25px;
		height: 25px;
		margin-top: 8px;
		margin-bottom: 3px;
	}
	.item-icon-active {
		transform: scale(1.2, 1.3);
		transition: all 2s ease;
	}
</style>
