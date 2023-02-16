using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("devices")]
    public class DevicesController : Controller
    {
        private readonly DeviceDbContext _context;

        public DevicesController(DeviceDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Devices);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Device newDevice)
        {
            if (newDevice == null || _context.Devices.Any(device => device.id == newDevice.id))
            {
                return BadRequest();
            }
            _context.Devices.Add(newDevice);
            _context.SaveChanges();
            return Ok(_context.Devices);
        }

        [HttpDelete]
        public IActionResult Delete([FromBody]string idToDelete)
        {
            var deviceToDelete = _context.Devices.Find(idToDelete);
            if (deviceToDelete != null)
            {
                _context.Devices.Remove(deviceToDelete);
                _context.SaveChanges();
                return Ok("Delete Successful");
            }
            return BadRequest("ID not found");
        }
    }
}
