
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

async function fetchProtectedData() {
  // Replace with your actual bearer token, often obtained separately
  const bearerToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijdzb2k4N3pkb3NJRnc4b19fbVR5a082QlVRNEZBVGhjaHlyNGZqY1dSbWcifQ.eyJlbWFpbCI6ImF0cmlwYXRoaUBhZG9iZS5jb20iLCJ1c2VyX2lkIjoiODU1RDFEMzI2MjQxODYyOTBBNDk1QzRGQGFkb2JlLmNvbSIsImltc1Rva2VuIjoiZXlKaGJHY2lPaUpTVXpJMU5pSXNJbmcxZFNJNkltbHRjMTl1WVRFdGEyVjVMV0YwTFRFdVkyVnlJaXdpYTJsa0lqb2lhVzF6WDI1aE1TMXJaWGt0WVhRdE1TSXNJbWwwZENJNkltRjBJbjAuZXlKcFpDSTZJakUzTlRnd056Z3hNemd6TXpOZlkyVmxOR05sT1dVdE1tRmlPQzAwTjJRM0xUZ3pPV1V0TXpBek5ETXdOREZqTXpkaFgzVmxNU0lzSW5SNWNHVWlPaUpoWTJObGMzTmZkRzlyWlc0aUxDSmpiR2xsYm5SZmFXUWlPaUpvWld4cGVDMWhaRzFwYmlJc0luVnpaWEpmYVdRaU9pSTROVFZFTVVRek1qWXlOREU0TmpJNU1FRTBPVFZETkVaQVlXUnZZbVV1WTI5dElpd2ljM1JoZEdVaU9pSmxlVXBvWWtkamFVOXBTblZpTWpWc1NXNHdMbVY1U25kamJUbDBZMGhSYVU5cFNXbE1RMHAyWTIxamFVOXBTbWhhUnpscFdsTktPUzRpTENKaGN5STZJbWx0Y3kxdVlURWlMQ0poWVY5cFpDSTZJamcxTlVReFJETXlOakkwTVRnMk1qa3dRVFE1TlVNMFJrQmhaRzlpWlM1amIyMGlMQ0pqZEhBaU9qQXNJbVpuSWpvaVdscE5TVmRVVkZaV1RFMDFRVVJWUzBoQlVWWkpXRUZCU2xraUxDSnphV1FpT2lJeE56VTNNamt4TnpFNE5qa3pYek15TnpVMU1qYzNMVFkwTUdRdE5EQmtaaTA1TW1ZMExUVTBaVE5tT0RnNU9EY3dObDkxZHpJaUxDSnlkR2xrSWpvaU1UYzFPREEzT0RFek9ETXpORjh5TkRoa1pUWmlaQzAzTlRVekxUUmhNV1V0T0Roak5TMWhaV0kxTWpJME1UVmxZekZmZFdVeElpd2liVzlwSWpvaVlqUmhNMlkwT0dZaUxDSndZbUVpT2lKUFVrY3NUV1ZrVTJWalRtOUZWaXhNYjNkVFpXTWlMQ0p5ZEdWaElqb2lNVGMxT1RJNE56Y3pPRE16TkNJc0ltVjRjR2x5WlhOZmFXNGlPaUl6TmpBd01EQXdJaXdpWTNKbFlYUmxaRjloZENJNklqRTNOVGd3TnpneE16Z3pNek1pTENKelkyOXdaU0k2SWtGa2IySmxTVVFzYjNCbGJtbGtMSEJ5YjJacGJHVXNaVzFoYVd3c1lXSXViV0Z1WVdkbExHZHVZWFlzYjNKbkxuSmxZV1FzY21WaFpGOXZjbWRoYm1sNllYUnBiMjV6TEhObGMzTnBiMjRzWVdSa2FYUnBiMjVoYkY5cGJtWnZMbTkzYm1WeVQzSm5MR0ZrWkdsMGFXOXVZV3hmYVc1bWJ5NXdjbTlxWldOMFpXUlFjbTlrZFdOMFEyOXVkR1Y0ZEN4aFpXMHVabkp2Ym5SbGJtUXVZV3hzSW4wLkRmY3gwSEpDOUdXVjhHejRxV3RMaXowU3cxbktQYlBsUXQ2RjByWWtyTVEyck45X0tGVXFjN1hTQWdHanIxa01RR1ZQdnRpNW51UVoxWGRiUjBPNTlBbWg1TVlQdWlvZTVVd3psNC1IeEctQjVUVGF0X3Y2TkRWTnpQUWJKUVJHUU12MnJKaWNkOUJkS0dVejZ4Z2JhU29PZGliNEhnLUhlU2pCNHhvZGFENEN2UzJRbGhfNmhZTDNwZmJsYW5WVkZrVGpRVGVFX1RsMElrS25PRjZ5UUJCcW92Y3VUS2NoNlZfYV9WZmloZ3dGbGFlZnNmZ3BKckpIdkJ0czRVZzlpaUMwY21BMVB5M0JmaVVoV1pNWmw2LTZ2YWlnMmkxWElSRmhubWpnNnhILVBxZVJOdnRES1JsbG1GUXRWVkVZc1dpcHRsc0R6Ml82M1NadUlsaW9NUSIsImlhdCI6MTc1ODA3ODEzOCwiaXNzIjoiaHR0cHM6Ly9hZG1pbi5obHgucGFnZS8iLCJzdWIiOiIqLyoiLCJhdWQiOiI4M2EzNjM1NS1hZDE3LTRlZDAtODcwMS1lOTlhMzAyMGY4NmEiLCJleHAiOjE3NTgwODE3Mzh9.X5qF_KKnPaXjpQA4bRKCwwOxrubmD-obPCAXipSdmFZp7iMt0B8eLSLufZOA_yLMlxsdOG-NRx0y4veckaK7cP7MkogoyQSfejtwGimOyDpHuQt7xWWBBXLRvdNWgNrH06p5CrP7ZTCFYPkDLm-LJgr07y1DW5u-u4xhhquo63Gh_sOgPlvgZz8ebs3-UqXk945W2ZkwglHZ9wZawr_H9PH85ScxuooNq94KbUgcFAA92tqZRitQQN1vWwhnmqESWvlnOJgXm5Spxnql4v0QndyJuaPlJ8vE7OKiazH4Vh6KJc5au0Ykz_DFhYmp3NkQQ_M2-i1WI3zBiv48Ok4H5A';

  const response = await fetch('https://admin.hlx.page/config/ashishtripathi1/sites.json', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

// Usage
fetchProtectedData().then(data => {
  console.log(data);
}).catch(error => {
  console.error(error);
});
 
