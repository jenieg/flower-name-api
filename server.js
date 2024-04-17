const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors())

const flowers = {
    'january': {
        'flower': 'Carnation',
        'botanicalname': 'Dianthus caryophyllus',
        'symbolism': 'Innocence, pure love, and remembrance.',
        'image': 'https://i.ibb.co/s1MJbCQ/carnations-full-width.webp'
    },
    'february': {
        'flower': 'Violet',
        'botanicalname': 'Streptocarpus',
        'symbolism': 'Modesty, faithfulness, and everlasting love.',
        'image': 'https://i.ibb.co/0mw0qcY/african-violet-green-full-width.webp'
    },
    'march': {
        'flower': 'Daffodil',
        'botanicalname': 'Narcissus spp.',
        'symbolism': 'Inspiration, forgiveness, and creativity.',
        'image': 'https://i.ibb.co/q7bWjx8/daffodil-march-birth-flower-1920x1534px-pixabay-full-width.webp'
    },
    'april': {
        'flower': 'Daisy',
        'botanicalname': 'Leucanthemum x superbum',
        'symbolism': 'Innocence, purity, and true love.',
        'image': 'https://i.ibb.co/MgGTcKN/daisies-276112-1920-full-width.webp'
    },
    'may': {
        'flower': 'Lily of the Valley',
        'botanicalname': 'Convallaria majalis',
        'symbolism': 'Motherhood, sweetness, and purity.',
        'image': 'https://i.ibb.co/ScdT1w2/lily-of-the-valley-updated-1280x960px-pixabay-full-width.webp'
    },
    'june': {
        'flower': 'Rose',
        'botanicalname': 'Rosa spp.',
        'symbolism': 'Love, beauty, and affection.',
        'image': 'https://i.ibb.co/Yb0Cbw2/rose-pink-full-width.webp'
    },
    'july': {
        'flower': 'Water Lily',
        'botanicalname': 'Nymphaeaceae',
        'symbolism': 'Purity, innocence, and chastity.',
        'image': 'https://i.ibb.co/9nZDYX4/water-lily-full-width.webp'
    },
    'august': {
        'flower': 'Gladiolus',
        'botanicalname': 'Gladiolus spp.',
        'symbolism': 'Victory, healing, and honor.',
        'image': 'https://i.ibb.co/SmgmyY6/gladiolus-updated-1920x1280px-pixabay-full-width.webp'
    },
    'september': {
        'flower': 'Aster',
        'botanicalname': 'Asteraceae',
        'symbolism': 'Wisdom, patience and beauty.',
        'image': 'https://i.ibb.co/3zbcHtg/asters-updated-1920x1275-full-width.webp'
    },
    'october': {
        'flower': 'Marigold',
        'botanicalname': 'Tagetes spp.',
        'symbolism': 'Properity, optimism, joy.',
        'image': 'https://i.ibb.co/T4jwHd3/flower-2469091-1920-full-width.webp'
    },
    'november': {
        'flower': 'Chrysanthemum',
        'botanicalname': 'Chrysanthemum',
        'symbolism': 'Loyalty, friendship, and joy.',
        'image': 'https://i.ibb.co/hYk415F/chrysanthemum-pink-full-width.webp'
    },
    'december': {
        'flower': 'Holly',
        'botanicalname': 'Ilex aquifolium',
        'symbolism': 'Protection, Renewal, Light.',
        'image': 'https://i.ibb.co/mXf1hww/holly-306584-1280-full-width.webp'
    },
    'unknown': {
        'flower': '',
        'botanicalname': '',
        'symbolism': '',
        'image': 'https://placehold.co/600x400?text=Not+Found'
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