using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Xml.Linq;

namespace YourProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GetTeammatesController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var teammates = new[] {
                new { Name = "Sneha", Role = "Developer" },
                new { Name = "Spoorthi", Role = "Tester" },
                new { Name = "Pavan", Role = "Tester" },
                new { Name = "Simham", Role = "Tester" },
                new { Name = "Ranganath", Role = "Tester" }
            };

            return Ok(teammates);
        }
    }
}
