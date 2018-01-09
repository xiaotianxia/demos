<template>
	<div class="qr">
		<image-upload @change="onChange"></image-upload>
	</div>
</template>	

<script>
import ImageUpload from '@/components/ImageUpload';

export default {
	data () {
		return {
			image: null
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
			let barcodeDetector = new BarcodeDetector();
			barcodeDetector.detect(image)
	      	.then(qrs => {
	      		console.log(qrs);
		        for (let qr of qrs) {
			       this.renderLinkValue(qr); 
		        }
		    }).catch((e) => {
	        	console.error('fail:' + e);
	      	});
		},

		renderLinkValue (qr) {
			let $container = $('.display').addClass('small'),
				link = qr.rawValue;
			$container.prepend(`<a class="link" href="${link}" target="_blank">${link}</a>`);
			window.open(link, '_blank');
		}
	}
}
</script>