const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors())

const flowers = {
    'pansies': {
        'botanical name': 'viola x wittrockiana',
        'symbolism': 'thoughts',
        'special feature': 'attracts butterflies'
    },
    'cosmos': {
        'botanical name': 'cosmos bipinnatus',
        'symbolism': 'october birth flower',
        'special feature': 'attracts butterflies and songbirds'
    },
    'forget-me-nots': {
        'botanical name': 'myosotis scorpioides',
        'symbolism': 'true love memories',
        'special feature': 'attracts butterflies and songbirds'
    },
    'unknown': {
        'botanical name': 'not in directory',
        'symbolism': 'n/a',
        'special feature': 'n/a'
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