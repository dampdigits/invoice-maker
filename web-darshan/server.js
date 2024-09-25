const express = require('express');
const cors = require('cors');
const playwright = require('playwright');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/screenshot', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        // Launch browser
        const browser = await playwright.chromium.launch();
        const page = await browser.newPage();

        // Visit the URL
        await page.goto(url);

        // Take a screenshot
        const screenshotBuffer = await page.screenshot();

        // Close the browser
        await browser.close();

        // Send the screenshot as a response
        res.setHeader('Content-Type', 'image/png');
        res.send(screenshotBuffer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

