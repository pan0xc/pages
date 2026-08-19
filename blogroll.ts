import fs from 'node:fs';

import Parser from 'rss-parser';

interface Feed {
    title: string;
    url: string;
    date: Date;
}

const parser = new Parser();

async function feed(url: string): Promise<Feed[]> {
    const feeds: Feed[] = await parser.parseURL(url).then(feed => {
        return feed.items.map(item => ({
            title: item.title || '',
            url: item.link || '',
            date: new Date(item.pubDate || '')
        }));
    });

    if (feeds.length === 0) {
        return [];
    }

    return feeds.slice(0, 5).sort((a, b) => b.date.getTime() - a.date.getTime());
}

async function main() {
    const urls = await fs.promises.readFile('blogroll.txt', 'utf-8').then(data => data.split('\n').filter(line => line.trim() !== ''));
    const feeds: Feed[] = (await Promise.all(urls.map(url => feed(url)))).flat().sort((a, b) => b.date.getTime() - a.date.getTime());
    fs.promises.writeFile('data/blogroll.json', JSON.stringify(feeds, null, 2), 'utf-8');
}

main()
