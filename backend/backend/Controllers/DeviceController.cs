using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("devices")]
    public class DeviceController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Get");
        }

        [HttpPost]
        public IActionResult Post()
        {
            return Ok("Post");
        }

        [HttpDelete]
        public IActionResult Delete()
        {
            return Ok("Delete");
        }
    }
}