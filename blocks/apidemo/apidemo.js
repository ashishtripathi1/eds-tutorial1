
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

const url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=30min&apikey=demo";

// Fetch data from the API
fetch(url)
  .then(response => {
    // Check if response is ok (status 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse JSON response
  })
  .then(data => {
    console.log("API Response:", data);
	//const title = data.title;
    // Print the title inside the block
    //block.textContent = `Title: ${title}`;
    // Example: Access the 'Time Series (30min)' data
    const timeSeries = data["Time Series (30min)"];
    if (timeSeries) {
      console.log("Sample data point:", Object.entries(timeSeries)[0]);
    }
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
