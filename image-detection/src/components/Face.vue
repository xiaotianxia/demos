<template>
	<div class="face">
		<image-upload @change="onChange"></image-upload>
	</div>
</template>	

<script>
import ImageUpload from '@/components/ImageUpload';

export default {
	data () {
		return {
			image: null,
			faces: []
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
			let faceDetector = new FaceDetector(
				{
					fastMode: true, 
					maxDetectedFaces: 20
				}
			);
			faceDetector.detect(image)
	      	.then(faces => {
	      		console.log(faces);
	      		if(!faces.length) { 
	      			alert('No faces detected!');
	      		} else {
					alert(faces.length + ' faces detected!');
		      		this.faces = faces;
	      			this.renderBoxes(faces);
	      		}
		    }).catch((e) => {
	        	console.error('fail:' + e);
	      	});
		},

		renderBoxes (faces) {
			let $container = $('.display');
	        for (let face of faces) {
				let $box = $('<div class="box"></div>'),
					ratio = this.image.offsetWidth / this.image.naturalWidth;
		        $box.css({
					'left': ratio * face.boundingBox.x,
					'top': ratio * face.boundingBox.y,
					'width': ratio * face.boundingBox.width,
					'height': ratio * face.boundingBox.height
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
				this.renderBoxes(this.faces);
			}, 200);
		})
	}
}
</script>