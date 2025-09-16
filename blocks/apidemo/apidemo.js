
export default async function decorate(block) {
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
  }
 
