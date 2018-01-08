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
			
		}
	},

	components: {
		ImageUpload
	},

	methods: {
		onChange (e) {
			console.log(e.blob);
			let image = e.image,
				$container = $('.display'),
				faceDetector = new FaceDetector(
					{
						fastMode: true, 
						maxDetectedFaces: 20
					}
				);
			faceDetector.detect(image)
		      	.then(faces => {
		        	console.log(faces);
		        	let rate = image.offsetWidth / image.naturalWidth;
			        for (let face of faces) {
				        let $box = $('<div class="box"></div>');
				        $box.css({
							'left': rate * face.boundingBox.x,
							'top': rate * face.boundingBox.y,
							'width': rate * face.boundingBox.width,
							'height': rate * face.boundingBox.height
				        });
				        $container.append($box);
			        }
			    })
		      	.catch((e) => {
		        	console.error("Face Detection failed, boo.", e);
		      	});
		}
	}
}
</script>

<style scoped>
	
</style>