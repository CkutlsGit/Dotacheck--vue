import axios from 'axios';

export function getHeroCunterPicks(hero) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3000/api/heroes/${hero}`;

        axios.get(url)
            .then((response) => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}
