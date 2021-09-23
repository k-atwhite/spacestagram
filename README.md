<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="https://user-images.githubusercontent.com/49215782/133957842-2cb1b349-8a80-46c1-b7a8-6caab7d90d55.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Spacestagram</h3>

  <p align="center">
    Image-sharing from the final frontier
    <br />
    <br />
    <a href="https://spacestagram-kw.netlify.app/">View App</a>
    ·
    <a href="https://github.com/chrisccerami/mars-photo-api">API Source</a>
    ·
    <a href="https://www.linkedin.com/in/ka-white/">Kat's LinkedIn</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#considerations">Considerations</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </li>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

I had a lot of fun working on this project for [Shopify's Front End Intern challenge](https://docs.google.com/document/d/1QlC6htA5SXEl3YruAOkJWj2-0W3w-n0UOzGuJ1EcktQ/edit). Using NASA's incredible API offerings - I requested data and displayed the image, and some details about that particular image. The API is quite robust, and playing with different types of endpoints yeilds a wide array of possible image sets. I chose to display all the latest photos from the Mars Curiosity Rover.

I would like to showcase a simple, minimal interface, with small details to improve user exeperience while maintaining high accessibility.

### Built With

[![spacestagram](https://circleci.com/gh/k-atwhite/spacestagram.svg?style=svg)](https://app.circleci.com/pipelines/github/k-atwhite/spacestagram)
[![Netlify Status](https://api.netlify.com/api/v1/badges/3cde6c01-55e0-43df-bb9c-71fec55391f9/deploy-status)](https://app.netlify.com/sites/spacestagram-kw/deploys)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

### Considerations

#### Accessibility

Accessibility is key. My training as a Front End Developer emphasized the necessity of considering high color contrast, semantic html, ease of tabbing through elements, and supporting text to speech readers. In this project, I ensured every element was tabbable, each image had alt text, colors were contrasted, and there was no div soup!

I ran lighthouse and received a score of 100. However, I think that lighthouse was acting imperfectly as I found that I could not naviate through the focusable elements with my tab button. When I fixed this issue but adding a "tab-index", my lighthouse score dropped to a 96. I think that this issue comes from using a font-awesome icon for my heart.

<p align="center"><img width="650" alt="Screen Shot 2021-09-23 at 12 15 01 PM" src="https://user-images.githubusercontent.com/49215782/134561869-ae879b14-40ae-4d4e-b48f-25c9ef748dad.png"></p>


#### Responsiveness

I developed this app with "mobile first" in mind, ensuring that the likely primary user - a mobile user - had a seamless experience. A media query for a tablet and a laptop provides the same experience for larger screen users. Using percentages and width height rather than pixels ensures that as the screen size changes, so do the elements.

### Installation

```
git clone git@github.com:k-atwhite/spacestagram.git
cd spacestagram
npm install
npm start
```

## Usage

<p align="center"><img src=https://media.giphy.com/media/yJJPleogN0lLOIRBiD/giphy.gif?cid=790b761149f6c8f73d64143a1004072ebcd9cbfe8e99f0df&rid=giphy.gif&ct=g ></p>

Upon opening the app - a user can see a scrolling list of images from Mars curiosity taken recently. A user can tap the heart in the top left corner like "like" and image - click it again if they decide they don't like it anymore - and checkout out their collection of liked images by clicking the "My Favs" button. To see all available images, click on "All Images". Each image also has details, including the name of the camera, the Earth date it was taken, and the name of the Rover.

## Roadmap

This app has so much potential by nature of the many ways you can query data. One fun addition would be to add filters to cusotomize which images are available - a user could choose the rover, the specific camera, even the specific earth date (or Martian date!). And, with an ability to like photos, this app is also begging for a log-in function.

## Contact

<table>
  <tr>
    <td align="center"> <a href="https://github.com/k-atwhite">Kat White</td>
  </tr>
    <td><img src="https://avatars.githubusercontent.com/u/49215782?v=4" alt="Kat GH image" width="150" height="auto" /></td>
</table>
