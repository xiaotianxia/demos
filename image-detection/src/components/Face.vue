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
				$container = $('.display')[0],
				faceDetector = new FaceDetector({fastMode: true, maxDetectedFaces: 20});
			faceDetector.detect(image)
		      	.then(faces => {
		        	console.log(faces);
		        	let rate = image.offsetWidth / image.naturalWidth;
			        for (let face of faces) {
				        let bound = document.createElement('div');
				        bound.style.position = 'absolute';
				        bound.style.left = rate * face.boundingBox.x + 'px';
				        bound.style.top = rate * face.boundingBox.y + 'px';
				        bound.style.width = rate * face.boundingBox.width + 'px';
				        bound.style.height = rate * face.boundingBox.height + 'px';
				        bound.style.border = '2px solid red';
				        bound.style.backgroundColor = 'rgba(0, 0, 255, 0.25)';
				        $container.appendChild(bound);
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