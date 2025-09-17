
/* export default async function decorate(block) {
	fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    // 'title' property from the response
    const title = data.title;
    // Print the title inside the block
    block.textContent = `Title: ${title}`;
  })
  .catch(error => {
    block.textContent = 'Error fetching data';
    console.error('Fetch error:', error);
  });
  } */

async function fetchWithCookie() {
  const response = await fetch('https://admin.hlx.page/config/ashishtripathi1/sites.json', {
    method: 'GET',
    credentials: 'include'  // crucial for cross-origin, for same-origin not required but is good practice
  });
  const data = await response.json();
  return data;
}

// Usage
fetchWithCookie().then(data => {
  console.log(data);
}).catch(error => {
  console.error(error);
});
