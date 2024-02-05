using Microsoft.AspNetCore.Mvc;
using vanlife.Server.Models;

namespace vanlife.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VansController : ControllerBase
    {
        private static readonly Van[] vans = [
            new(1, "Modest Explorer",60,"The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!","https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", "simple", "123"),
            new(2, "Beach Bum",80, "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",  "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",  "rugged","123" ),
            new(3, "Reliable Red",100, "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",  "luxury", "456"),
            new(4, "Dreamfinder",65, "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", "simple", "789"),
            new(5, "The Cruiser",120, "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", "luxury", "789"),
            new(6, "Green Wonder",70, "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", "rugged","123" )

        ];


        [HttpGet]
        [Route("client")]
        public IEnumerable<Van> Get()
        {
            return vans;
        }

        [HttpGet]
        [Route("{id}")]
        public Van GetVan(int id)
        {
            return vans.Single(van => van.id == id);
        }

        [HttpGet]
        [Route("host/{hostId}")]
        public IEnumerable<Van> getUsersVan(string hostId)
        {
            return vans.Where(van => van.HostId == hostId);
        }
    }
}