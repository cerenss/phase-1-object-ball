function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 11,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    }
}

function numPointsScored(playerName) {
    const game = gameObject()
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].points;
        }
    }
}

function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].shoe;
        }
    }
}

function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team]["teamName"]) {
            return game[team].colors;
        }
    }
}

function teamNames() {
    const game = gameObject();
    let teamNamesArr = [];
    for (const team in game) {
        teamNamesArr.push(game[team].teamName);
    }
    return teamNamesArr;
}

function playerNames(teamName) {
    const game = gameObject();
    let jerseyNumArr = [];
    for (const team in game) {
        if (game[team]["teamName"]) {
            const players = game[team].players;
            for (const player in players) {
                jerseyNumArr.push(players[player].number);
            }
        }
    }
    return jerseyNumArr;
}

function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
        const teamPlayers = game[team].players;
        for (const player in teamPlayers) {
            if (playerName) {
                return game[team].players[playerName];
            }
        }
    }
}

function bigShoeRebounds() {
    const game = gameObject();
    const rebounds = {};
    for (const team in game) {
        const players = game[team].players;
        const shoeSizes = [];
        for (const player in players) {
            let shoeSize = players[player].shoe;
            shoeSizes.push(shoeSize);
        }
        const maxSize = shoeSizes.reduce(findMax, shoeSizes[0]);
        function findMax(max, current) {
            return current > max ? current : max;
        }
        for (const player in players) {
            const playerShoe = players[player].shoe;
            if (maxSize === playerShoe) {
                const reboundCount = players[player].rebounds;
                rebounds[player] = reboundCount;
            }
        }
    }
    return rebounds;
}

function mostPointsScored() {
    const game = gameObject();
    let maxObjects = [];

    for (const team in game) {
        const teamPlayers = game[team].players;
        let pointsArr = [];

        // fill pointsArr with the points of all players in the team
        for (const player in teamPlayers) {
            const points = teamPlayers[player].points;
            pointsArr.push(points);
        }

        // find the value of the max points in the team
        const maxPointsInTeam = pointsArr.reduce(findMax, pointsArr[0]);

        function findMax(max, current, index) {
            return current > max ? current : max;
        }
        let maxObject = {};

        for (const player in teamPlayers) {
            if (game[team].players[player].points === maxPointsInTeam) {
                maxObject = {
                        maxPlayerInTeam : player,
                        maxPointInTeam : maxPointsInTeam
                }
            }
        }
        maxObjects.push(maxObject);
    }
    const finalObject = maxObjects.reduce((max, current) => {
        return current.maxPointInTeam > max.maxPointInTeam ? current : max;
    });
    return finalObject;
}
