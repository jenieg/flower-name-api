const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors())

const flowers = {
    'january': {
        'flower': 'Carnation',
        'botanicalname': 'Dianthus caryophyllus',
        'symbolism': 'Innocence, pure love, and remembrance.'
    },
    'february': {
        'flower': 'Violet',
        'botanicalname': 'Streptocarpus',
        'symbolism': 'Modesty, faithfulness, and everlasting love.'
    },
    'march': {
        'flower': 'Daffodil',
        'botanicalname': 'Narcissus spp.',
        'symbolism': 'Inspiration, forgiveness, and creativity.'
    },
    'april': {
        'flower': 'Daisy',
        'botanicalname': 'Leucanthemum x superbum',
        'symbolism': 'Innocence, purity, and true love.'
    },
    'may': {
        'flower': 'Lily of the Valley',
        'botanicalname': 'Convallaria majalis',
        'symbolism': 'Motherhood, sweetness, and purity.'
    },
    'june': {
        'flower': 'Rose',
        'botanicalname': 'Rosa spp.',
        'symbolism': 'Love, beauty, and affection.'
    },
    'july': {
        'flower': 'Water Lily',
        'botanicalname': 'Nymphaeaceae',
        'symbolism': 'Purity, innocence, and chastity.'
    },
    'august': {
        'flower': 'Gladiolus',
        'botanicalname': 'Gladiolus spp.',
        'symbolism': 'Victory, healing, and honor.'
    },
    'september': {
        'flower': 'Aster',
        'botanicalname': 'Asteraceae',
        'symbolism': 'Wisdom, patience and beauty.'
    },
    'october': {
        'flower': 'Marigold',
        'botanicalname': 'Tagetes spp.',
        'symbolism': 'Properity, optimism, joy.'
    },
    'november': {
        'flower': 'Chrysanthemum',
        'botanicalname': 'Chrysanthemum',
        'symbolism': 'Loyalty, friendship, and joy.'
    },
    'december': {
        'flower': 'Holly',
        'botanicalname': 'Ilex aquifolium',
        'symbolism': 'Protection, Renewal, Light.'
    },
    'unknown': {
        'flower': 'Flower Not Found',
        'botanicalname': '',
        'symbolism': ''
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