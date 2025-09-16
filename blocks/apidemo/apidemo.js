
export default async function decorate(block) {
	fetch(block){
		const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.clone.json())
 	block.append("This is printed here");
 	console.log("This is printed here");
	}
  }
 
