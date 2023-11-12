import axios from 'axios';

export function getHeroCunterPicks(hero) {
    return new Promise((resolve, reject) => {
        const url = `/api/heroes/${hero}`;

        axios.get(url)
            .then((response) => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}
