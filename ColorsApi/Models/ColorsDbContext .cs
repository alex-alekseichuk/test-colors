using Microsoft.EntityFrameworkCore;

namespace ColorsApi.Models
{
    public class ColorsContext : DbContext
    {
        public ColorsContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<ColorRecord> ColorRecords { get; set; }
    }
}
