import axios from 'axios';
import cheerio from 'cheerio';

export function getHeroCunterPicks(hero) {
    return new Promise((resolve, reject) => {
        const url = `https://ru.dotabuff.com/heroes/${hero}`;

        axios.get(url)
            .then((response) => {
                if (response.status === 200) {
                    const $ = cheerio.load(response.data);
                    const heroNames = [];

                    $('.link-type-hero').each((index, element) => {
                        const heroName = $(element).text();
                        heroNames.push(heroName);
                    });

                    const heroCounterPick = heroNames.slice(-10);
                    resolve(heroCounterPick);
                } else {
                    reject(new Error('Failed to fetch data'));
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}
