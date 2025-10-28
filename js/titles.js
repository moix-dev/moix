document
  .querySelectorAll('h1,h2,h3')
  .forEach(x=>{
    x.innerHTML = `<a href="${x.id}">${x.innerHTML}</a>`;
  });
