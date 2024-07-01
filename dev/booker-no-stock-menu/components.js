class NoStockMenu extends HTMLElement {
  constructor() {
    super();
    this.branches = JSON.parse(this.getAttribute('data-branches'));
    this.products = JSON.parse(this.getAttribute('data-products'));
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="container no-stock-menu booker text-white h-100 p-3" id="no-stock-menu">
<div class="row">
  <div class="col-10">
    <p>Branches with Stock Available for Collection</p>
    <p>${this.products[0].description} (${this.products[0].volume})</p>
  </div>
  <div class="col-2">
    <button type="button" class="close text-white" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</div>
<div class="row">
  <div class="col-8 p-0">
    <input type="text" class="form-control" placeholder="Enter postcode or location">
  </div>
  <div class="col-4 p-0">
    <a href="#" class="btn bg-primary d-block">Find Branches</a>
  </div>
</div>
<div class="container m-3">
  <div class="row filters">
    <div class="col-8">
      
    </div>
    <div class="col-4">
      Filter Branches <i class="fa-solid fa-sliders border p-1"></i>
    </div>
  </div>
</div>
<div class="container">
  <div class="row availableFilters">
    <div class="col-12">
      <b>Available Filters</b>

    </div>
  </div>
</div>
<div class="container p-0" id="branches">
  ${this.products[0].stock.map((product) => 
    this.branches.map((branch) => product.id == branch.id ? `
  <div class="row mt-2 p-3 text-dark bg-white">
    <div class="col-12 p-0">
      <div class="row text-left">
    <div class="col-8 p-0">
      <a href="#" class="font-weight-bold">BOOKER ${branch.name.toUpperCase()}</a>
    </div>
    <div class="col-4 text-center">
      <p><b>${branch.distance} Miles</b></p>
    </div>
  </div>
  <div class="row">
    <div class="col-8 p-0">${branch.isOpened ? `<span class="lozenge bg-success"></span> <b>Open</b> until ${branch.close}` : `<span class="lozenge bg-danger"></span> <b>Closed</b>. Opens ${branch.open} `}</div>
    <div class="col-4">${product.quantity > 10 ? `<span class="bg-success d-block text-center text-white">IN STOCK</span>` : product.quantity > 0 && product.quantity <= 5 ? `<span class="bg-warning d-block text-center text-white">LOW STOCK</span>` : `<span class="bg-secondary d-block text-center text-white">NO STOCK</span>`}</div>
  </div> 
 </div> 
</div>    
` : '').join("")).join("")}
<div class="row mt-2 mb-5">
  <div class="col-12 p-0">
    <a href="#" class="btn d-block p-3 w-100 bg-light text-dark">Show more branches</a>
  </div>
</div>
<div class="row">
  <div class="col-12 p-0">
    <a href="#" class="btn d-block p-3 w-100 bg-primary">Close Menu</a>
  </div>
</div>
</div>
    `;
  }
}



  /*this.branches = JSON.parse(this.getAttribute('data-branches'));
    this.products = JSON.parse(this.getAttribute('data-products'));
    
    this.innerHTML = `
      <div class="container no-stock-menu booker text-white h-100 p-3" id="no-stock-menu">
<div class="row">
  <div class="col-10">
    <p>Branches with Stock Available for Collection</p>
    <p>${this.products[0].description} (${this.products[0].volume})</p>
  </div>
  <div class="col-2">
    <button type="button" class="close text-white" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</div>
<div class="row">
  <div class="col-8 p-0">
    <input type="text" class="form-control" placeholder="Enter postcode or location">
  </div>
  <div class="col-4 p-0">
    <a href="#" class="btn bg-primary d-block">Find Branches</a>
  </div>
</div>
<div class="container m-3">
  <div class="row filters">
    <div class="col-8">
      
    </div>
    <div class="col-4">
      Filter Branches <i class="fa-solid fa-sliders border p-1"></i>
    </div>
  </div>
</div>
<div class="container">
  <div class="row availableFilters">
    <div class="col-12">
      <b>Available Filters</b>

    </div>
  </div>
</div>
<div class="container p-0" id="branches">
  ${this.products[0].stock.map((product) => 
    this.branches.map((branch) => product.id == branch.id ? `
  <div class="row mt-2 p-3 text-dark bg-white">
    <div class="col-12 p-0">
      <div class="row text-left">
    <div class="col-8 p-0">
      <a href="#" class="font-weight-bold">BOOKER ${branch.name.toUpperCase()}</a>
    </div>
    <div class="col-4 text-center">
      <p><b>${branch.distance} Miles</b></p>
    </div>
  </div>
  <div class="row">
    <div class="col-8 p-0">${branch.isOpened ? `<span class="lozenge bg-success"></span> <b>Open</b> until ${branch.close}` : `<span class="lozenge bg-danger"></span> <b>Closed</b>. Opens ${branch.open} `}</div>
    <div class="col-4">${product.quantity > 10 ? `<span class="bg-success d-block text-center text-white">IN STOCK</span>` : product.quantity > 0 && product.quantity <= 5 ? `<span class="bg-warning d-block text-center text-white">LOW STOCK</span>` : `<span class="bg-secondary d-block text-center text-white">NO STOCK</span>`}</div>
  </div> 
 </div> 
</div>    
` : '').join("")).join("")}
<div class="row mt-2 mb-5">
  <div class="col-12 p-0">
    <a href="#" class="btn d-block p-3 w-100 bg-light text-dark">Show more branches</a>
  </div>
</div>
<div class="row">
  <div class="col-12 p-0">
    <a href="#" class="btn d-block p-3 w-100 bg-primary">Close Menu</a>
  </div>
</div>
</div>
    `;
}*/


/*class StockLabel extends HTMLElement {

}

class StockFilter extends HTMLElement {

}*/

customElements.define('rts-no-stock-menu', NoStockMenu);
/*customElements.define('rts-stock-label', StockLabel);
customElements.define('rts-stock-filter', StockFilter);*/