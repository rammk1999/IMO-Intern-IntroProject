using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Intern.Models;

namespace Intern.Domains
{
    public interface IDatabaseService
    {
        Task<IEnumerable<Image>> GetAllImages();
        Task<Image> GetImage(string name);
        Task CreateImage(Image image);
        Task UpdateImage(string nameOfImageToUpdate, Image newImage);
        Task DeleteImage(string nameOfImageToDelete);
    }
}
