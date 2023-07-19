class DataSource {
    static searchPlayer(keyword) {
        return fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${keyword}&s=Soccer`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.player) {
                    const soccerPlayers = responseJson.player.filter(player =>
                        player.strSport === "Soccer" &&
                        player.strThumb !== null &&
                        player.strPlayer !== null &&
                        player.strNationality !== null &&
                        player.strTeam !== null &&
                        player.strBirthLocation !== null &&
                        player.dateBorn !== null &&
                        player.strDescriptionEN !== null
                    );
                    return Promise.resolve(soccerPlayers);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }
}

export default DataSource;