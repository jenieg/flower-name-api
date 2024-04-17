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
        'image': 'https://i.ibb.co/dPtQ2VV/carnations-full-width.jpg'
    },
    'february': {
        'flower': 'Violet',
        'botanicalname': 'Streptocarpus',
        'symbolism': 'Modesty, faithfulness, and everlasting love.',
        'image': 'https://i.ibb.co/prW6PfR/african-violet-green-full-width.jpg'
    },
    'march': {
        'flower': 'Daffodil',
        'botanicalname': 'Narcissus spp.',
        'symbolism': 'Inspiration, forgiveness, and creativity.',
        'image': 'https://i.ibb.co/7rKNzrV/daffodil-march-birth-flower-1920x1534px-pixabay-full-width.jpg'
    },
    'april': {
        'flower': 'Daisy',
        'botanicalname': 'Leucanthemum x superbum',
        'symbolism': 'Innocence, purity, and true love.',
        'image': 'https://i.ibb.co/zNCgWgL/daisies-276112-1920-full-width.jpg'
    },
    'may': {
        'flower': 'Lily of the Valley',
        'botanicalname': 'Convallaria majalis',
        'symbolism': 'Motherhood, sweetness, and purity.',
        'image': 'https://i.ibb.co/VgqDnKR/lily-of-the-valley-updated-1280x960px-pixabay-full-width.jpg'
    },
    'june': {
        'flower': 'Rose',
        'botanicalname': 'Rosa spp.',
        'symbolism': 'Love, beauty, and affection.',
        'image': 'https://i.ibb.co/znz35np/rose-pink-full-width.jpg'
    },
    'july': {
        'flower': 'Water Lily',
        'botanicalname': 'Nymphaeaceae',
        'symbolism': 'Purity, innocence, and chastity.',
        'image': 'https://i.ibb.co/qkVfStM/water-lily-full-width.jpg'
    },
    'august': {
        'flower': 'Gladiolus',
        'botanicalname': 'Gladiolus spp.',
        'symbolism': 'Victory, healing, and honor.',
        'image': 'https://i.ibb.co/qmXjxnk/gladiolus-updated-1920x1280px-pixabay-full-width.jpg'
    },
    'september': {
        'flower': 'Aster',
        'botanicalname': 'Asteraceae',
        'symbolism': 'Wisdom, patience and beauty.',
        'image': 'https://i.ibb.co/gzxZZ1j/asters-updated-1920x1275-full-width.jpg'
    },
    'october': {
        'flower': 'Marigold',
        'botanicalname': 'Tagetes spp.',
        'symbolism': 'Properity, optimism, joy.',
        'image': 'https://i.ibb.co/bHC6cfb/flower-2469091-1920-full-width.jpg'
    },
    'november': {
        'flower': 'Chrysanthemum',
        'botanicalname': 'Chrysanthemum',
        'symbolism': 'Loyalty, friendship, and joy.',
        'image': 'https://i.ibb.co/SsJ5Bjx/chrysanthemum-pink-full-width.jpg'
    },
    'december': {
        'flower': 'Holly',
        'botanicalname': 'Ilex aquifolium',
        'symbolism': 'Protection, Renewal, Light.',
        'image': 'https://i.ibb.co/P49J6wc/holly-306584-1280-full-width.jpg'
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