namespace vanlife.Server.Models
{
    public class Van(int id, string name, int price, string description, string imageUrl, string type, string hostId)
    {
        public int id { get; } = id;
        public string name { get; } = name;
        public int price { get; } = price;
        public string description { get; } = description;
        public string imageUrl { get; } = imageUrl;
        public string type { get; } = type;
        public string HostId { get; } = hostId;
    }
}