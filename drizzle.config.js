/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:pK4dljNLF2hz@ep-nameless-term-a5idl8ol.us-east-2.aws.neon.tech/%20GenText%20AI?sslmode=require',

    }
  };