 

 document.getElementById("colorBtn").addEventListener("click", () => {
    const colors = [ 'bg-yellow-100', 'bg-pink-200', 'bg-purple-100', 'bg-orange-100' ,'bg-blue-100', 'bg-green-200',];


    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.className = `${randomColor} transition-colors duration-500`;
  });