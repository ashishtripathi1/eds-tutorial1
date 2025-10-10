
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


const url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=ADBE&interval=30min&apikey=Z5HPGQAVYHYGJEZ5";

export default async function decorate(block) {
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
	const metaData = data["Meta Data"];
	 const timeSeries = data["Time Series (30min)"]; 
	if (metaData) {
          const information = metaData["1. Information"];
          const symbol = metaData["2. Symbol"];

          let html = `<strong>Information:<strong> ${information}<br><strong>Symbol:<strong> ${symbol}<br><strong>Last Refreshed:<strong> ${refreshed}<br><strong>Interval:<strong> ${interval}<br><strong>Time Zone:<strong> ${timeZone}`;
		

          if (timeSeries) {
            const entries = Object.entries(timeSeries).slice(0, 10); // top 10 records
            html += `
              <table>
                <tr>
                  <th>DateTime</th>
                  <th>Open</th>
                  <th>High</th>
                  <th>Low</th>
                  <th>Close</th>
                  <th>Volume</th>
                </tr>
            `;
            for (const [datetime, values] of entries) {
              html += `
                <tr>
                  <td>${datetime}</td>
                  <td>${values["1. open"]}</td>
                  <td>${values["2. high"]}</td>
                  <td>${values["3. low"]}</td>
                  <td>${values["4. close"]}</td>
                  <td>${values["5. volume"]}</td>
                </tr>
              `;
            }
            html += `</table>`;
          } else {
            html += `<p>No Time Series data found.</p>`;
          }

          block.innerHTML = html;
        } else {
          block.textContent = "Meta Data not found in response.";
        }
      })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
  }
// Fetch data from the API

