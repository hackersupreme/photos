/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const data = require('./data.json');


exports.createPages =  ({ actions }) => {

	const { createPage } = actions;

	const image_template = path.resolve('./src/components/image.js');

	let photos = data.photos;

	photos.forEach(image => {
		let path = 'image-' + image.id;
		createPage({
			path,
			component: image_template,
			context: image
		})
	})


}
