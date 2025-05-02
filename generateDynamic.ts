import { writeFileSync, readdirSync, writeFile } from "fs";
import { join } from "path";
import {SitemapStream ,streamToPromise} from 'sitemap';

const hostname = "https://yktravels.com/";

// function to get image urls from public/images folder
function getImageUrls(){
    const imagesDir = join(process.cwd(), 'public','images');
    const images = readdirSync(imagesDir);
    return images.map(image=> `${hostname}/images/${image}`);
}

function getStaticRoutes(){
    return [
        '/',
        '/best-Tours-and-travels-agency-in-delhi-ncr',
        '/pacakges',
        '/packages/nag-tibba-trek', 
        '/packages/water-sports-tehri-dam', 
        '/packages/ruinsara-tal-trek', 
        '/packages/har-ki-doon',
        '/packages/ali-bedni-bugyal-trek', 
        '/packages/phulara-ridge-trek', 
        '/packages/bali-pass-trek', 
        '/packages/gaumukh-tapovan-trek',
        '/packages/chopta-chandrashila-trek', 
        '/packages/pangarchulla-trek',
        '/packages/char-dham-yatra',
        '/packages/valley-of-flowers',
        '/packages/rishikesh-yk-travels',
        '/packages/mussoorie-yk-travels',
        '/packages/nainital-yk-travels',
        '/packages/haridwar-yk-travels',
        '/packages/jim-corbett-yk-travels',
        '/packages/manali-yk-travels',
        '/packages/shimla-yk-travels',
        '/packages/dharamshala-yk-travels',
        '/packages/kasol-yk-travels',
        '/packages/srinagar-yk-travels',
        '/packages/gulmarg-yk-travels',
        '/packages/pahalgam-yk-travels', 
        '/packages/sonmarg-yk-travels', 
        '/packages/leh-ladakh-yk-travels',
        '/packages/jammu-kashmir-yk-travels',
        '/transportation',
        '/activity/star-gazing',
        '/activity/river-rafting',
        '/activity/jungle-safari', 
        '/activity/bungee-jumping',
        '/activity/camping', 
        '/activity/hiking',
        '/activity/paragliding', 
        '/blogs/ultimate-guide-trekking-uttarakhand',
        '/blogs/valley-of-flowers-trek',
        '/blogs/roopkund-trek-adventure',
        '/blogs/kedarnath-trek-guide',   
        '/blogs',
        '/contact',
 
       
    ]
}

async function generateSitemap(){
    try {
        const staticRoutes = getStaticRoutes();
        const imageUrls = getImageUrls();

        const stream = new SitemapStream({ hostname });

        [...staticRoutes].forEach(route => {
            stream.write({url: route});
        });

        stream.write({
            url: '/images',
            img: imageUrls.map(url => ({
                url, 
                caption: 'Image from our gallery',
                title: url.split('/').pop()
            }))
        });

        stream.write({
            url: '/gallery', 
            img: imageUrls.map(url => ({url}))
        });

        stream.end();

        const data = await streamToPromise(stream);
        writeFileSync('./public/sitemap.xml', data.toString());

        console.log('Sitemap with images generated successfully.');

    } catch (error){
        console.error('Error generating sitemap : ', error);
    }
}

generateSitemap();