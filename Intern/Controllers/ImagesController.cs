using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Intern.Models;
using Intern.Domains;
namespace Intern.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly IDatabaseService m_databaseService;
        public ImagesController(IDatabaseService databaseService)
        {
            m_databaseService = databaseService;
        }

        // GET api/values
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var images = await m_databaseService.GetAllImages();
            return Ok(images);
        }

        // GET api/images/{name}
        [HttpGet("{name}")]
        public async Task<IActionResult> Get(string name)
        {
            var image = await m_databaseService.GetImage(name);
            return Ok(image);
        }

        // POST api/images
        [HttpPost]
        public async Task Post([FromBody] Image image)
        {
            await m_databaseService.CreateImage(image);
        }

        // PUT api/images/{name}
        [HttpPut("{nameOfImageToUpdate}")]
        public async Task Put(string nameOfImageToUpdate, [FromBody] Image newImage)
        {
            await m_databaseService.UpdateImage(nameOfImageToUpdate, newImage);
        }

        // DELETE api/images/{name}
        [HttpDelete("{nameOfImageToDelete}")]
        public async Task Delete(string nameOfImageToDelete)
        {
            await m_databaseService.DeleteImage(nameOfImageToDelete);
        }
    }
}
