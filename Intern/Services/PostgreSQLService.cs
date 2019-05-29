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
    }
}
