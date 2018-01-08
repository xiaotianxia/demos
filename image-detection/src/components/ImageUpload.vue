<template>
	<div class="upload">
		<div class="input">
			<input type="file" @change="onChange">
		</div>
		<div class="display"></div>
		<div class="output"></div>
	</div>
</template>	

<script>

export default {
	data () {
		return {

		}
	},

	methods: {
		onChange (e) {
			let file = e.target.files[0],
				blob = new Blob([file]),    // 文件转化成二进制文件
			    url = URL.createObjectURL(blob),    //转化成url
		    	$img = $('<img src="' + url + '">');
		    $img[0].onload = () => {
		    	URL.revokeObjectURL(this.src);
		    	this.$emit('change', {
					image: $img[0]
				});
		    }
		    $('.display').html('').append($img[0]);
		}
	}
}
</script>

<style>
	.input {

	}

	.display {
		position: relative;
	}
	.display img {
		display: inline-block;
		width: 98%;
		background-color: #fff;
	}
	.display .box {
		position: absolute;
		border: 2px solid red;
		background-color: rgba(0, 0, 255, 0.25);
	}
</style>