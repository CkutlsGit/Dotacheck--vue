const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'dotacheck', 'public')));
app.use(cors());

app.get('/api/heroes/:hero', async (req, res) => {
    const { hero } = req.params;
    try {
        const url = `https://ru.dotabuff.com/heroes/${hero}`;
        const response = await axios.get(url);

        if (response.status === 200) {
            const $ = cheerio.load(response.data);
            const heroNames = [];

            $('.link-type-hero').each((index, element) => {
                const heroName = $(element).text();
                heroNames.push(heroName);
            });

            const heroCounterPick = heroNames.slice(-10);
            res.json(heroCounterPick);
        } else {
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Backend server start, port 3000');
});
