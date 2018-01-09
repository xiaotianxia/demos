<template>
	<div class="text">
		<image-upload @change="onChange"></image-upload>
	</div>
</template>	

<script>
import ImageUpload from '@/components/ImageUpload';

export default {
	data () {
		return {
			image: null,
			texts: []
		}
	},

	components: {
		ImageUpload
	},

	methods: {
		onChange (e) {
			this.image = e.image;
			this.initDetector(this.image);
		},

		initDetector (image) {
			let textDetector = new TextDetector();
			textDetector.detect(image)
	      	.then(texts => {
	      		console.log(texts);
	      		if(!texts.length) { 
	      			alert('No texts detected!');
	      		} else {
		      		alert(texts.length + ' texts detected!');
		      		this.texts = texts;
				    this.renderBoxes(texts); 
	      		}
		    }).catch((e) => {
	        	console.error('fail:' + e);
	      	});
		},

		renderBoxes (texts) {
			let $container = $('.display');
			for (let text of texts) {
				let $box = $('<div class="box"></div>'),
				ratio = this.image.offsetWidth / this.image.naturalWidth;
		        $box.css({
					'left': ratio * text.boundingBox.x,
					'top': ratio * text.boundingBox.y,
					'width': ratio * text.boundingBox.width,
					'height': ratio * text.boundingBox.height
		        });
		        $container.append($box);
	        }
		}
	},

	mounted () {
		let timer = null;
		$(window).resize(() => {
			$('.display').find('.box').remove();
			timer && clearTimeout(timer);
			timer = setTimeout(() => {
				this.renderBoxes(this.texts);
			}, 200);
		})
	}
}
</script>