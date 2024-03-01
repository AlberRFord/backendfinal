function fetchData() {
    fetch("https://quickchart.io/chart?c=%7B%0A%20%20type%3A%20%27bar%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20labels%3A%20%5B%27January%27%2C%20%27February%27%2C%20%27March%27%2C%20%27April%27%2C%20%27May%27%2C%20%27June%27%2C%20%27July%27%5D%2C%0A%20%20%20%20datasets%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%27line%27%2C%0A%20%20%20%20%20%20%20%20label%3A%20%27Dataset%201%27%2C%0A%20%20%20%20%20%20%20%20borderColor%3A%20%27rgb(54%2C%20162%2C%20235)%27%2C%0A%20%20%20%20%20%20%20%20borderWidth%3A%202%2C%0A%20%20%20%20%20%20%20%20fill%3A%20false%2C%0A%20%20%20%20%20%20%20%20data%3A%20%5B-33%2C%2026%2C%2029%2C%2089%2C%20-41%2C%2070%2C%20-84%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20%27Dataset%202%27%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%27rgb(255%2C%2099%2C%20132)%27%2C%0A%20%20%20%20%20%20%20%20data%3A%20%5B-42%2C%2073%2C%20-69%2C%20-94%2C%20-81%2C%2018%2C%2087%5D%2C%0A%20%20%20%20%20%20%20%20borderColor%3A%20%27white%27%2C%0A%20%20%20%20%20%20%20%20borderWidth%3A%202%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20%27Dataset%203%27%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%27rgb(75%2C%20192%2C%20192)%27%2C%0A%20%20%20%20%20%20%20%20data%3A%20%5B93%2C%2060%2C%20-15%2C%2077%2C%20-59%2C%2082%2C%20-44%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%7D%2C%0A%20%20options%3A%20%7B%0A%20%20%20%20title%3A%20%7B%0A%20%20%20%20%20%20display%3A%20true%2C%0A%20%20%20%20%20%20text%3A%20%27My%20chart%27%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D&v=2.9.4&w=500&h=300&bkg=white")
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('API request failed');
    }
  })
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error(error); 
  });
}
