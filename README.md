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

data.json
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

However, I wanted each image to have its own page and I wanted those pages to be created programatically.  

Gatsby.js is a static site builder that uses React.js. 
