using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Intern.Domains;
using Intern.Models;
using Dapper;
using Npgsql;
using Intern.Services;
using Microsoft.Extensions.Configuration;
using System.Data;

namespace Intern.Services
{
    public class PostgreSQLService : IDatabaseService
    {
        private readonly string m_connectionString;
        public PostgreSQLService(IConfiguration configuration)
        {
            m_connectionString = configuration.GetValue<string>("ConnectionString");
        }
        public async Task<IEnumerable<Image>> GetAllImages()
        {
            using (var conn = new NpgsqlConnection(m_connectionString))
            {
                await conn.OpenAsync();
                return await conn.QueryAsync<Image>("intern.images_get_all", null, commandType: CommandType.StoredProcedure);
            }
        }
        public async Task<Image> GetImage(string name)
        {
            using (var conn = new NpgsqlConnection(m_connectionString))
            {
                await conn.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("_name", name);
                return await conn.QueryFirstOrDefaultAsync<Image>(
                    "intern.images_get",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }
        public async Task CreateImage(Image image)
        {
            using (var conn = new NpgsqlConnection(m_connectionString))
            {
                await conn.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("_name", image.Name);
                dynamicParameters.Add("_url", image.URL);
                await conn.ExecuteAsync(
                    "intern.images_create",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }
        public async Task UpdateImage(string nameOfImageToUpdate, Image newImage)
        {
            using (var conn = new NpgsqlConnection(m_connectionString))
            {
                await conn.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("_name", nameOfImageToUpdate);
                dynamicParameters.Add("_new_name", newImage.Name);
                dynamicParameters.Add("_new_url", newImage.URL);
                await conn.ExecuteAsync(
                    "intern.images_update",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }
        public async Task DeleteImage(string nameOfImageToUpdate)
        {
            using (var conn = new NpgsqlConnection(m_connectionString))
            {
                await conn.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("_name", nameOfImageToUpdate);
                await conn.ExecuteAsync(
                    "intern.images_delete",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }
    }
}
