const apiUrl = "https://blog-lukas.lukaswebdeveloper.com/wp-json/wp/v2";
let total;

function getPosts(numberPosts = 10, page = 1, categories = null){
  let url = `${apiUrl}/posts?_embed&per_page=${numberPosts}&page=${page}`;
  if(categories){
    url += `&categories=${categories}`;
  }
  return  fetch(url)
    .then(res => {
     total = res.headers.get("X-WP-Total");
     console.log(total);
     
      
      return res.json()})
    .then(posts =>{
        return {
          total,
          posts
        };
    })
}


function getPost(id){
  // console.log(id);
  
  return  fetch(`${apiUrl}/posts/${id}?_embed`)
    .then(res => res.json())
    .then(post =>{
        return post;
    })
}


function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


const hamburger = document.querySelector(".hamburger");
const headerLinks = document.querySelector(".header-links");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", ()=>{

    hamburger.classList.toggle("rotate");

    if(!headerLinks.classList.contains("active")){
        headerLinks.classList.add("active");
        nav.style.position = "fixed";
    }else {
        headerLinks.classList.remove("active");

    }
})

