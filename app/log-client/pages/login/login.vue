<template>
	<view class="log-login-main">
		<view class="log-login-title">
			登录
		</view>
		<view class="log-login-img">
			<image src="../../static/login-work.png"></image>
		</view>
		<view class="log-login-form">
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column log-login-item">
					<uni-icons type="person" size="30"></uni-icons>
					<input class="uni-input" name="username" placeholder="输入用户名" />
				</view>
				<view class="uni-form-item uni-column log-login-item">
					<uni-icons type="checkmarkempty" size="30"></uni-icons>
					<input class="uni-input" name="password" password placeholder="输入密码" />
				</view>
				<view class="uni-btn-v log-login-item--btn">
					<button type="primary" form-type="submit" class="log-login-item-btn--login">登录</button>
					<text class="log-login-item-btn--rePwd">修改密码</text>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {

			};
		},
		components: {
			uniIcons
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				this.$request("api/login", formdata, "POST").then(res => {
					uni.showModal({
						content: "登录成功",
						showCancel: false
					});
				}).catch(err => {
					uni.showModal({
						content: err.message,
						showCancel: false
					});
				});
			},
			formReset: function(e) {
				console.log('清空数据')
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		background: #d9e4e8;
	}

	.log-login-main {
		width: 750rpx;
		height: 100%;
		margin-top: 40rpx;
		position: relative;

		.log-login-title {
			font-size: 42rpx;
			color: #013c5c;
			padding: 0 40rpx;
			font-weight: bold;
		}

		.log-login-img {
			width: 620rpx;
			margin: 0 auto;
			image{
				width: 620rpx;
			}
		}

		.log-login-form {
			position: absolute;
			top: 50%;
			left: 0;
			right: 0;

			.log-login-item {
				width: 620rpx;
				height: 38px;
				margin: 40rpx auto;
				padding: 20rpx;
				background: #fff;
				border-radius: 5px;

				.uni-input {
					float: right;
					width: 540rpx;
					height: 38px;
				}
			}

			.log-login-item--btn {
				width: 660rpx;
				height: 38px;
				margin: 40rpx auto;
				padding: 20rpx;

				.log-login-item-btn--login {
					background: #013c5c;
				}

				.log-login-item-btn--rePwd {
					margin-top: 20px;
					color: #0a4462;
					display: block;
					font-size: 24rpx;
				}
			}
		}

	}
</style>
