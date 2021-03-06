# Simple Gatsby.js Photography Portfolio Site

Contents:

- Overview
- Live Example
- Installation
- Documentation
- Resources / Contact Info

## Overview

This is a simple photography portfolio built with Gatsby.js. It has a feed of images on the main page and each image has its own page.

I wanted to create something as simple as possible since I only wanted a JSON file with an array of image objects to handle the data with the site. 

**data.json**
```
{
	"photos": [
		{
			"id":8,
			"title":"snow bush",
			"filepath":"snowbush.png",
			"date":"April 15 2020",
			"price":"69",
			"camera": "iPhone 8"
		},	
    ...
  ]
}
```

However, I wanted each image to have its own page and I wanted those pages to be created programatically. I didn't want to manually create html files for each page.

Gatsby.js is a static site builder that can take data and create pages from it. It uses React.js but comes with a built in router which is helpful because you can avoid using react-router. 

## Live Example

http://photos.hackersupreme.com

## Installation

This assumes you have the following already installed:
- [Gatsby.js](https://www.gatsbyjs.org/)
- [Node.js](https://nodejs.org/en/)
- Node Package Manager (npm)

1. Create file directory on your local device
2. Download files to that directory
3. Using a command line software, enter the directory
```
cd directory-name
```
4. Use npm install to get the node modules
```
npm install
```
5. Use gatsby develop to start the server
```
gatsby develop
```

## Documentation

In Gatsby.js the `gatsby-node.js` file is where you can use the `createPages` API that creates pages programmatically from data.

**gatsby-node.js**
```
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

```

createPage accepts the following as arguments:
- path
	- relative url
- component
	- template file to use
- context
	- data to be sent to template file

**/src/components/image.js**

```
import React from "react"
import { Link } from "gatsby"

import Header from './header.js'
import Footer from '../components/footer.js'
import SEO from '../components/seo.js'

const ImagePage = ({pageContext: image}) => {

	let Image = require('../images/' + image.filepath);

  	return(
	    <React.Fragment>

	    <SEO title={image.title} />

	    <Header />
	    <main>

	    	<figure class="single">

	    		<img src={Image} />
	    	
	    		<h2>{image.title}</h2>

		    	<figcaption class="single">
		    		<p><strong>ID</strong></p>
				    <p class="align-right">{image.id}</p>
				    <p><strong>Date</strong></p>
				    <p class="align-right">{image.date}</p>
				    <p><strong>Camera</strong></p>
				    <p class="align-right">{image.camera}</p>
				    <p><strong>Price</strong></p>
				    <p class="align-right">{image.price}</p>
			    </figcaption>

		    </figure>

	    </main>

	    <Footer />
	    </React.Fragment>
	)
}

export default ImagePage
```

## Resources / Contact Info

###### Email

jeffgsch@gmail.com

###### Website

http://hackersupreme.com

###### Resources

- [react.js](https://reactjs.org/)
- [gatsby.js](https://nodejs.org/en/)
- [programmatically create pages in gatsby.js](https://www.gatsbyjs.org/tutorial/part-seven/)
- [node.js](https://nodejs.org/en/)
