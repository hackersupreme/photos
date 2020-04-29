import React from "react"
import { Helmet } from "react-helmet"
import SEO from '../components/seo.js'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import { Link } from 'gatsby'


const data = require('../../data.json');
const path = require('path');


const ImageArticle = (props) => {

  let photo = props.photo;

  
  const Image = require('../images/' + photo.filepath);

  return(

    <figure class="home">

      <img src={Image} alt={photo.title} />

      <figcaption class="home">

        <h2><Link to={'/image-' + photo.id}>{photo.title}</Link></h2>

        <table>

          <tr>
            <th>
              ID
            </th>
            <th>
              Date
            </th>
            <th>
              Camera
            </th>
            <th>
              Price
            </th>
          </tr>
          <tr>
            <td>
              {photo.id}
            </td>
            <td>
              {photo.date}
            </td>
            <td>
              {photo.camera}
            </td>
            <td>
              {'$' + photo.price}
            </td>
          </tr>
        
        </table>

      </figcaption>

    </figure>

    )

}

const IndexPage = (props) => {

  let articles = data.photos.map((photo, i) => {
    return(
      <ImageArticle photo={photo} key={i} />
      )
  })

  return(
    <React.Fragment>

    <SEO title="Home"/>

    <Header />

    <main>

      {articles}

    </main>

    <Footer />

    </React.Fragment>
)}

export default IndexPage
