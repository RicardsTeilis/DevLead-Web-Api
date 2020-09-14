using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContosoCrafts.WebSite.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiApp.Models;

namespace WebApiApp
{
    [ApiController]
    public class ProductsController : ControllerBase
    {
        public ProductsController(JsonFileProductService productService)
        {
            this.ProductService = productService; 
        }

        public JsonFileProductService ProductService { get; }

        [HttpGet]
        [Route("[controller]/get")]
        public IEnumerable<Product> Get()
        {
            return ProductService.GetProducts();
        }

    }
}
