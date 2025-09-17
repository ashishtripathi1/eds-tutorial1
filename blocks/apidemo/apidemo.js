
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
  const authToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijdzb2k4N3pkb3NJRnc4b19fbVR5a082QlVRNEZBVGhjaHlyNGZqY1dSbWcifQ.eyJlbWFpbCI6ImF0cmlwYXRoaUBhZG9iZS5jb20iLCJ1c2VyX2lkIjoiODU1RDFEMzI2MjQxODYyOTBBNDk1QzRGQGFkb2JlLmNvbSIsImltc1Rva2VuIjoiZXlKaGJHY2lPaUpTVXpJMU5pSXNJbmcxZFNJNkltbHRjMTl1WVRFdGEyVjVMV0YwTFRFdVkyVnlJaXdpYTJsa0lqb2lhVzF6WDI1aE1TMXJaWGt0WVhRdE1TSXNJbWwwZENJNkltRjBJbjAuZXlKcFpDSTZJakUzTlRnd09USXhPREkxT1RSZll6a3dPREEwWkRVdE1XVmhaUzAwT1dRNExXRTNaVFV0Wm1Ka01qUTBZakl4WkdWbFgzVmxNU0lzSW5SNWNHVWlPaUpoWTJObGMzTmZkRzlyWlc0aUxDSmpiR2xsYm5SZmFXUWlPaUpvWld4cGVDMWhaRzFwYmlJc0luVnpaWEpmYVdRaU9pSTROVFZFTVVRek1qWXlOREU0TmpJNU1FRTBPVFZETkVaQVlXUnZZbVV1WTI5dElpd2ljM1JoZEdVaU9pSmxlVXBvWWtkamFVOXBTblZpTWpWc1NXNHdMbVY1U25kamJUbDBZMGhSYVU5cFNXbE1RMHAyWTIxamFVOXBTbWhhUnpscFdsTktPUzRpTENKaGN5STZJbWx0Y3kxdVlURWlMQ0poWVY5cFpDSTZJamcxTlVReFJETXlOakkwTVRnMk1qa3dRVFE1TlVNMFJrQmhaRzlpWlM1amIyMGlMQ0pqZEhBaU9qQXNJbVpuSWpvaVdscE5OMGhUUkVOV1RFMDFRVVJWUzBoQlVWWkpOMEZCTkVFaUxDSnphV1FpT2lJeE56VTNNamt4TnpFNE5qa3pYek15TnpVMU1qYzNMVFkwTUdRdE5EQmtaaTA1TW1ZMExUVTBaVE5tT0RnNU9EY3dObDkxZHpJaUxDSnlkR2xrSWpvaU1UYzFPREE1TWpFNE1qVTVOVjgzWm1VNU4ySXdNUzB3TlRBMkxUUXhPVFV0WVdSbFl5MHhPVGhpWW1NNU5EYzNPVGhmZFdVeElpd2liVzlwSWpvaU0yWXpZemhpTWpVaUxDSndZbUVpT2lKUFVrY3NUV1ZrVTJWalRtOUZWaXhNYjNkVFpXTWlMQ0p5ZEdWaElqb2lNVGMxT1RNd01UYzRNalU1TlNJc0ltVjRjR2x5WlhOZmFXNGlPaUl6TmpBd01EQXdJaXdpWTNKbFlYUmxaRjloZENJNklqRTNOVGd3T1RJeE9ESTFPVFFpTENKelkyOXdaU0k2SWtGa2IySmxTVVFzYjNCbGJtbGtMSEJ5YjJacGJHVXNaVzFoYVd3c1lXSXViV0Z1WVdkbExHZHVZWFlzYjNKbkxuSmxZV1FzY21WaFpGOXZjbWRoYm1sNllYUnBiMjV6TEhObGMzTnBiMjRzWVdSa2FYUnBiMjVoYkY5cGJtWnZMbTkzYm1WeVQzSm5MR0ZrWkdsMGFXOXVZV3hmYVc1bWJ5NXdjbTlxWldOMFpXUlFjbTlrZFdOMFEyOXVkR1Y0ZEN4aFpXMHVabkp2Ym5SbGJtUXVZV3hzSW4wLlZYLXpSYnJWLXZxd054ZTdmS0JVLU14MU5QZndhWDNhdzJqZTZFcGZQLVlRX3lRZW5zb2hNME5fOXlxbDVnX1ZTbUU0aXVXU2pNNV9Qc3lYZld0R1RSRnlFNVJYU3V6RHh2aUlyOG9NV3VCOW9sWllPZUZJNklyYzlkYlZIeEpqNllsTUItSXRGR29MV29EQ0NiY3JnY2lTLWNfSUtBbjdaN3lfVUNlS1k1LVc0SnFZSjhrVnRGM0tZWDJWSmxfR3FVdTVFUWx1b1RDQ1Ftc3o0UG1COE5QMHI3ZWdKNTMtSVN3a3Z4UnIwdXVPbWpQNjNzYjlRc0dKQmNkUFFPRkxZZl85ejRza2w3NkF3S2d3QXl1Um9wNGducjMyUWM2aUladEVwQlZ5dk1Od2hocGQwUV80S0pzTUxCT2ZfVmJ0SkNGQnNhazhmX0t6MlZ6MW5RWmh2dyIsImlhdCI6MTc1ODA5MjE4MiwiaXNzIjoiaHR0cHM6Ly9hZG1pbi5obHgucGFnZS8iLCJzdWIiOiIqLyoiLCJhdWQiOiI4M2EzNjM1NS1hZDE3LTRlZDAtODcwMS1lOTlhMzAyMGY4NmEiLCJleHAiOjE3NTgwOTU3ODJ9.yUgRce0H3UBVITdjf8ePgN6XXhUdBU4a0LhQa3hFSreH7KJKCW1TvKdlmtA6HN-kHHyY1C4yCzv_jgfzq3ozYGlkCgbJ56cIEtA2QmfGsRtpZujQkj-2eTG9U64gNRAfV1GRUA-VVHhV27nKOHx-3vIpapwuEm9mh7xI8FrScqx7tKamd7rBi9CdsCU9lb0w5LmtFL5gjttEjqmHO6co-ENa6sTahGHbT9AloacafffC_OlJqwiCKJ8B0Uo627LgdeEgfPEcn6DG1QfkmyCibA9ROs2BZcqJcCEoDoI1akykVAyr__LfrjkWIkThmlUcRTjc1EnCF3hgtkHXsUVRtQ';

  const response = await fetch('https://admin.hlx.page/config/ashishtripathi1/sites.json', {
    method: 'GET',
    headers: {
      'Authorization': `auth_token ${authToken}`,
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
 
