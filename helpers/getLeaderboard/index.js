/*
  Get leaderboard
*/
const client = require("../../main").client;
const config = require("../../config.json");

module.exports = {
  async getLeaderboard() {
    const leaderboard = await Levels.fetchLeaderboard(config.serverInfo.GUILD_ID, 10);
    return leaderboard;
  },
};
