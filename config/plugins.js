module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
// module.exports = {
//   'strapi-neon-tech-db-branches': {
//     enabled: true,
//     config: {
//       neonApiKey: "h164q3m0hrhaiowp9qu7j7o44xkxpr29rb1f7nlr1l2tphhqpgztq24zqsb52vcx", // get it from here: https://console.neon.tech/app/settings/api-keys
//       neonProjectName: "ecommerce-coffe", // the neon project under wich your DB runs
//       neonRole: "neondb_owner", // create it manually under roles for your project first
//       gitBranch: "main" // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
//     }
//   },
// }
