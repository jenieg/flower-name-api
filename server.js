const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors())

const flowers = {
    'pansies': {
        'botanicalname': 'viola x wittrockiana',
        'symbolism': 'thoughts',
        'specialfeature': 'attracts butterflies'
    },
    'cosmos': {
        'botanicalname': 'cosmos bipinnatus',
        'symbolism': 'october birth flower',
        'specialfeature': 'attracts butterflies and songbirds'
    },
    'forget-me-nots': {
        'botanicalname': 'myosotis scorpioides',
        'symbolism': 'true love memories',
        'specialfeature': 'attracts butterflies and songbirds'
    },
    'unknown': {
        'botanicalname': 'not in directory',
        'symbolism': 'n/a',
        'specialfeature': 'n/a'
    }
};

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
});

app.get('/api/:flower', (request, response) => {
    const flowerName = request.params.flower.toLowerCase()
    if(flowers[flowerName]){
        response.json(flowers[flowerName])
    } else {
        response.json(flowers['unknown'])
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Find Flowers on Port: ${PORT}`)
});