const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = 3000;

app.listen(port, function () {
    console.log('Listening on port 3000')
})

app.post('/post_JSON', (req, res) => {
    let data = JSON.parse(req.body.textarea);
    let headers = 'firstName,lastName,county,city,role,sales\n';

    // Convert object to CSV
    const JsonToCsv = function (salesReport, output = '') {
        output += (`${salesReport.firstName},${salesReport.lastName},${salesReport.county},${salesReport.city},${salesReport.role},${salesReport.sales}\n`);

        if (salesReport.children.length > 0) {
            for (let child of salesReport.children) {
                return JsonToCsv(child, output);
            }
        }
        return output
    }

    // Add headers to CSV
    let csv = (headers + JsonToCsv(data));

    // Render new view 
    res.render('csv', { rendered: csv })
    res.end();
})

