using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class DeviceDbContext : DbContext
    {
        public DbSet<Device> Devices { get; set; }

        public DeviceDbContext(DbContextOptions<DeviceDbContext> options): base(options) { }
    }
}
