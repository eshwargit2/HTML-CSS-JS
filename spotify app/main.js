//pages 

const home_page = document.getElementById('home');
const search_page = document.getElementById('search');
const library_section = document.getElementById('library-section');
const add_section = document.getElementById('add-section')
const premium_section = document.getElementById('premium-section');

//bfooter buttons
const home_btn = document.getElementById('home-btn');
const search_btn = document.getElementById('search-btn');
const lib_btn = document.getElementById('lib-btn');
const add_btn = document.getElementById('add-btn');
const icon_btn = document.getElementById('icon-btn');



home_btn.addEventListener('click',()=>{
   
    home_page.style.display="block"
    search_page.style.display="none"
    library_section.style.display="none"
     add_section.style.display="none"
      premium_section.style.display="none"
      
     search_btn.style.display="block"//button

})

search_btn.addEventListener('click',()=>{

     home_page.style.display="none"
    search_page.style.display="block"
      library_section.style.display="none"
       add_section.style.display="none"
        premium_section.style.display="none"
    search_btn.style.display="block"//button
})

lib_btn.addEventListener('click',()=>{

      home_page.style.display="none"
      search_page.style.display="none"
      library_section.style.display="block"
      add_section.style.display="none"
       premium_section.style.display="none"

})

add_btn.addEventListener('click',()=>{
  home_page.style.display="none"
  search_page.style.display="none"
  library_section.style.display="none"
  add_section.style.display="block"
   premium_section.style.display="none"

})

icon_btn.addEventListener('click',()=>{
  premium_section.style.display="block"
  home_page.style.display="none"
  search_page.style.display="none"
  library_section.style.display="none"
  add_section.style.display="none"
})
