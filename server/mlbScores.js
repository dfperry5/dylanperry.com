const request = require('request');
const Promise = require('bluebird');

module.exports = {
    philliesGames: (req, res) => {
        request("http://gd2.mlb.com/components/game/mlb/year_2017/month_06/day_13/miniscoreboard.json",
            (err, response, body) => {
            getPhilliesGames(body).then( (data) => {
                console.log("Responding...");
                let finalResult = {}
                finalResult.game = [];
                data.forEach( (game, idx) => {
                    finalResult.game[idx] = {
                        home: {
                            score: game.home_team_runs,
                            team: game.home_team_name
                        },
                        away: {
                            score: game.away_team_runs,
                            team: game.away_team_name
                        }
                    };
                });
                res.send(finalResult);
            });
        });
     }
}

function getPhilliesGames(body){
    return new Promise( (resolve, reject) => {
        resolve(JSON.parse(body).data.games.game.filter( (game) => {
            return (game.away_team_name === 'Phillies' || game.home_team_name === 'Phillies')
        }));
    });
};