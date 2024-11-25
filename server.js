const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'web')));

app.get('/', async (req, res) => {
    console.log('Hello World');
    const referral = req.query.referral_id;
    const env = req.query.env;
    let fallbackImageUrl = "https://applicant.apichainstaff.ch/icons/app_logo.png";

    let imageUrl = fallbackImageUrl;

    if (referral !== undefined) {
        try {
            const fetchUrl =
                "https://" +
                (env ?? 'dev').toString() +
                ".apichainstaff.ch/api/jobs/retrieve-referred-job/" +
                referral?.toString() +
                "/";
            const response = await fetch(fetchUrl, { method: 'GET' })

            if (!response.ok) {
                imageUrl = fallbackImageUrl;
            }
            else {
                const json = await response.json();
                imageUrl = json['result']['job']['company']['logo'];
            }
        } catch (error) {
            console.error('Error fetching job data:', error);
        }
    }

    console.log("Image URL: " + imageUrl);

    const indexPath = path.join(__dirname, 'web/index.html');
    fs.readFile(indexPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading index.html:', err);
            return res.status(500).send('Server error, yo');
        }

        // Inject the dynamic metadata into the <head>
        const modifiedHtml = data.replace(
            '<head>',
            `<head>
                <meta property="og:image" content="${imageUrl}">
            `
        );

        // Send the modified HTML
        res.send(modifiedHtml);
    });
});

app.listen(port, () => console.log('Server is running on port ' + port));