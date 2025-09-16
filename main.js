let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
function showSlides() {
    slides.forEach(s=> s.style.display='none');
    slideIndex++;
    if(slideIndex > slides.length) slideIndex=1;
    slides[slideIndex-1].style.display='block';
    setTimeout(showSlides, 3000);
}
if(slides.length>0) showSlides();
fetch('products.json')
.then(res => res.json())
.then(data => {
    const grid = document.getElementById('products-grid');
    if(grid){
        data.forEach(p => {
            const div = document.createElement('div');
            div.className='product';
            div.innerHTML = `<img src="${p.image}" alt="${p.name}" style="width:100%"><h3>${p.name}</h3><p>${p.price} دج</p><a href="product.html?id=${p.id}"><button>تفاصيل</button></a>`;
            grid.appendChild(div);
        });
    }
    const detail = document.getElementById('product-detail');
    if(detail){
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const product = data.find(p=>p.id==id);
        if(product){
            detail.innerHTML = `<img src="${product.image}" alt="${product.name}" style="width:300px"><h2>${product.name}</h2><p>${product.price} دج</p><p>${product.description}</p><p>مقاسات: ${product.sizes.join(', ')}</p><p>ألوان: ${product.colors.join(', ')}</p><button>شراء</button>`;
        }
    }
});
