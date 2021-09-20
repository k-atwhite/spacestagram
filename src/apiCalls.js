export async function fetchLatestPhotos() {
  const response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=9sRsIjAG7N8bqqRQAKa62riI2qnxklLWIs4DcDvX`
  );
  let data = await response.json();
  return data;
}

// const response = await fetch(
//   `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY`
// );
// let data = await response.json();
// console.log(data)
