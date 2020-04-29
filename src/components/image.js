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