/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_URL || "https://desmond-kristian.my.id",
  generateRobotsTxt: true, // (optional)
  // ...other options
};

module.exports = { config };
