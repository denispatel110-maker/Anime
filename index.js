const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Simple anime database
const animeDB = {
  "naruto": { id: 20, slug: "naruto" },
  "naruto-shippuden": { id: 1735, slug: "naruto-shippuden" },
  "one-piece": { id: 21, slug: "one-piece" },
  "attack-on-titan": { id: 16498, slug: "shingeki-no-kyojin" },
  "demon-slayer": { id: 101922, slug: "kimetsu-no-yaiba" },
  "jujutsu-kaisen": { id: 113415, slug: "jujutsu-kaisen" },
  "my-hero-academia": { id: 101348, slug: "boku-no-hero-academia" },
  "death-note": { id: 1535, slug: "death-note" },
  "tokyo-revengers": { id: 120328, slug: "tokyo-revengers" },
  "spy-x-family": { id: 140339, slug: "spy-x-family" },
  "chainsaw-man": { id: 140339, slug: "chainsaw-man" },
  "bleach": { id: 269, slug: "bleach" },
  "dragon-ball": { id: 2236, slug: "dragon-ball" },
  "dragon-ball-z": { id: 813, slug: "dragon-ball-z" },
  "one-punch-man": { id: 21087, slug: "one-punch-man" },
  "hunter-x-hunter": { id: 11061, slug: "hunter-x-hunter" },
  "fairy-tail": { id: 6702, slug: "fairy-tail" },
  "sword-art-online": { id: 11757, slug: "sword-art-online" },
  "black-clover": { id: 98444, slug: "black-clover" },
  "vinland-saga": { id: 101348, slug: "vinland-saga" },
  "re-zero": { id: 21355, slug: "rezero" },
  "mob-psycho-100": { id: 100876, slug: "mob-psycho-100" },
  "the-promised-neverland": { id: 101348, slug: "the-promised-neverland" },
  "dr-stone": { id: 105333, slug: "dr-stone" },
  "fire-force": { id: 110784, slug: "fire-force" },
  "haikyu": { id: 20583, slug: "haikyu" },
  "blue-lock": { id: 140339, slug: "blue-lock" },
  "solo-leveling": { id: 142838, slug: "solo-leveling" }
};

// Get real video URLs from various sources
async function getVideoSources(embedUrl) {
  try {
    console.log('Extracting from:', embedUrl);
    
    const response = await axios.get(embedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://watchanimeworld.in/',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      timeout: 10000
    });

    const $ = cheerio.load(response.data);
    
    // Method 1: Direct video sources
    const directSources = [];
    $('source').each((i, el) => {
      const src = $(el).attr('src');
      if (src && (src.includes('.mp4') || src.includes('.m3u8'))) {
        directSources.push({
          quality: $(el).attr('label') || 'default',
          url: src.startsWith('http') ? src : new URL(src, embedUrl).href,
          type: src.includes('.m3u8') ? 'hls' : 'mp4'
        });
      }
    });

    // Method 2: Script extraction
    const scriptSources = [];
    $('script').each((i, el) => {
      const scriptContent = $(el).html();
      if (scriptContent) {
        // MP4 patterns
        const mp4Matches = scriptContent.match(/(https?:\/\/[^\s"']+\.mp4[^\s"']*)/gi);
        if (mp4Matches) {
          mp4Matches.forEach(url => {
            if (!scriptSources.some(s => s.url === url)) {
              scriptSources.push({ quality: 'auto', url, type: 'mp4' });
            }
          });
        }
        
        // M3U8 patterns
        const m3u8Matches = scriptContent.match(/(https?:\/\/[^\s"']+\.m3u8[^\s"']*)/gi);
        if (m3u8Matches) {
          m3u8Matches.forEach(url => {
            if (!scriptSources.some(s => s.url === url)) {
              scriptSources.push({ quality: 'hls', url, type: 'hls' });
            }
          });
        }
        
        // JW Player patterns
        if (scriptContent.includes('file:')) {
          const fileMatch = scriptContent.match(/file:\s*["']([^"']+)["']/);
          if (fileMatch) {
            const url = fileMatch[1];
            if (!scriptSources.some(s => s.url === url)) {
              scriptSources.push({ quality: 'jwplayer', url, type: url.includes('.m3u8') ? 'hls' : 'mp4' });
            }
          }
        }
      }
    });

    // Combine all sources
    const allSources = [...directSources, ...scriptSources];
    
    // If no sources found, return the embed URL as fallback
    if (allSources.length === 0) {
      return [{ quality: 'embed', url: embedUrl, type: 'embed' }];
    }

    return allSources;
  } catch (error) {
    console.error('Extraction error:', error.message);
    return [{ quality: 'error', url: embedUrl, type: 'embed' }];
  }
}

// MAIN API ENDPOINT - GET EPISODE
app.get('/api/episode/:animeName/:season/:episode', async (req, res) => {
  try {
    const { animeName, season, episode } = req.params;
    
    // Find anime in database
    const anime = animeDB[animeName.toLowerCase()];
    if (!anime) {
      return res.status(404).json({
        success: false,
        error: 'Anime not found',
        availableAnime: Object.keys(animeDB)
      });
    }

    // Build the episode URL
    const episodeUrl = `https://watchanimeworld.in/episode/${anime.slug}-episode-${episode}/`;
    
    console.log('Fetching:', episodeUrl);
    
    const response = await axios.get(episodeUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://watchanimeworld.in/'
      },
      timeout: 15000
    });

    const $ = cheerio.load(response.data);

    // Extract episode info
    const title = $('h1.entry-title').text().trim() || `${animeName} Episode ${episode}`;
    const description = $('.entry-content p').first().text().trim() || '';
    const thumbnail = $('.post-thumbnail img').attr('src') || '';

    // Extract all iframe sources
    const iframeSources = [];
    $('iframe').each((i, el) => {
      const src = $(el).attr('src');
      if (src && src.includes('http')) {
        iframeSources.push({
          server: `Server ${i + 1}`,
          embedUrl: src
        });
      }
    });

    // Get video URLs from each iframe
    const servers = [];
    for (const iframe of iframeSources) {
      try {
        const videoSources = await getVideoSources(iframe.embedUrl);
        servers.push({
          server: iframe.server,
          embedUrl: iframe.embedUrl,
          sources: videoSources
        });
      } catch (error) {
        servers.push({
          server: iframe.server,
          embedUrl: iframe.embedUrl,
          sources: [{ quality: 'error', url: iframe.embedUrl, type: 'embed' }],
          error: error.message
        });
      }
    }

    // If no iframes found, try to find direct video links on page
    if (servers.length === 0) {
      const directVideoLinks = [];
      $('a[href*=".mp4"], a[href*=".m3u8"]').each((i, el) => {
        const href = $(el).attr('href');
        if (href) {
          directVideoLinks.push({
            server: 'Direct Link',
            embedUrl: href,
            sources: [{ quality: 'direct', url: href, type: href.includes('.m3u8') ? 'hls' : 'mp4' }]
          });
        }
      });
      servers.push(...directVideoLinks);
    }

    res.json({
      success: true,
      anime: animeName,
      anilistId: anime.id,
      season: parseInt(season),
      episode: parseInt(episode),
      title,
      description,
      thumbnail,
      episodeUrl,
      servers,
      totalServers: servers.length,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('API Error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch episode',
      message: error.message
    });
  }
});

// SEARCH ANIME ENDPOINT
app.get('/api/search', (req, res) => {
  const { q } = req.query;
  
  if (!q) {
    return res.json({
      success: true,
      results: Object.keys(animeDB).map(key => ({
        name: key,
        id: animeDB[key].id,
        slug: animeDB[key].slug
      }))
    });
  }

  const query = q.toLowerCase();
  const results = Object.keys(animeDB)
    .filter(name => name.toLowerCase().includes(query))
    .map(name => ({
      name,
      id: animeDB[name].id,
      slug: animeDB[name].slug
    }));

  res.json({
    success: true,
    query: q,
    results,
    total: results.length
  });
});

// LIST ALL ANIME ENDPOINT
app.get('/api/anime', (req, res) => {
  const animeList = Object.keys(animeDB).map(key => ({
    name: key,
    id: animeDB[key].id,
    slug: animeDB[key].slug
  }));

  res.json({
    success: true,
    total: animeList.length,
    anime: animeList
  });
});

// HEALTH CHECK - FIXED ROUTE
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is working perfectly on Vercel!',
    timestamp: new Date().toISOString(),
    totalAnime: Object.keys(animeDB).length,
    endpoints: [
      '/api/episode/:anime/:season/:episode',
      '/api/search?q=query',
      '/api/anime',
      '/api/extract?url=embed_url',
      '/health'
    ]
  });
});

// EXTRACT VIDEO FROM URL ENDPOINT
app.get('/api/extract', async (req, res) => {
  const { url } = req.query;
  
  if (!url) {
    return res.status(400).json({
      success: false,
      error: 'URL parameter is required'
    });
  }

  try {
    const sources = await getVideoSources(url);
    res.json({
      success: true,
      url,
      sources,
      totalSources: sources.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to extract video',
      message: error.message
    });
  }
});

// ROOT ENDPOINT
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: '🎬 Anime API Server is Running!',
    endpoints: {
      health: '/health',
      search: '/api/search?q=naruto',
      episode: '/api/episode/naruto/1/1',
      allAnime: '/api/anime',
      extract: '/api/extract?url=embed_url'
    },
    example: 'https://your-app.vercel.app/api/episode/naruto/1/1'
  });
});

// ERROR HANDLING
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    availableEndpoints: [
      'GET /health',
      'GET /api/episode/:anime/:season/:episode',
      'GET /api/search?q=query',
      'GET /api/anime',
      'GET /api/extract?url=embed_url'
    ]
  });
});

// Vercel requires module.exports for serverless functions
module.exports = app;

// Only listen locally, not on Vercel
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🎬 Anime API Server running on port ${PORT}`);
    console.log(`📚 Available anime: ${Object.keys(animeDB).length}`);
  });
}
