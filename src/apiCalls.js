// export async function fetchData() {
//   const response = await fetch(
//     `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=9sRsIjAG7N8bqqRQAKa62riI2qnxklLWIs4DcDvX&sol=1000`
//   );
//   let data = await response.json();
// }

export async function fetchLatestPhotos() {
  const response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=9sRsIjAG7N8bqqRQAKa62riI2qnxklLWIs4DcDvX&camera=navcam`
  );
  let data = await response.json();
  console.log(data);
  return data;
}
