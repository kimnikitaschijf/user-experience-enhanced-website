console.log('Hier komt je server voor Sprint 10.')

console.log('Gebruik uit Sprint 9 alleen de code die je mee wilt nemen.')

console.log('Zet \'m op!')

// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({ extended: true }))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

app.get('/', async function (request, response) {
  const webinarUrl = "https://fdnd-agency.directus.app/items/avl_webinars";
  const webinarUrlFilters = "?fields=title,thumbnail,date,slug,categories.*.*,speakers.*.*";
  const contouringsUrl = "https://fdnd-agency.directus.app/items/avl_contourings";
  const contouringsUrlFilters = "?fields=title,slug,image_scan,used_literature.*.*,categories.*.*";

  const webinarsResponse = await fetch(webinarUrl + webinarUrlFilters);
  const webinarsResponseJSON = await webinarsResponse.json();

  const contouringsResponse = await fetch(contouringsUrl + contouringsUrlFilters);
  const contouringsResponseJSON = await contouringsResponse.json();

  // Render index.liquid uit de Views map met de opgehaalde data
  response.render('index.liquid', {
    webinars: webinarsResponseJSON.data,
    contourings: contouringsResponseJSON.data
  });
});


app.get('/webinars', async function (request, response) {
  const webinarUrl = "https://fdnd-agency.directus.app/items/avl_webinars";
  const webinarUrlFilters = "?fields=title,thumbnail,date,slug,categories.*.*,speakers.*.*";
  const webinarsResponse = await fetch(webinarUrl + webinarUrlFilters);
  const webinarsResponseJSON = await webinarsResponse.json();

  // Render webinar-overzicht.liquid uit de Views map
  response.render('webinar-overzicht.liquid', { webinars: webinarsResponseJSON.data });
});


// Nieuwe route voor individuele webinars op basis van slug
app.get("/webinars/:slug", async function (request, response) {
  const slug = request.params.slug;

  // haal webinar ID op
  const webinarID = await fetch("https://fdnd-agency.directus.app/items/avl_webinars?fields=id&filter[slug][_eq]=" + slug)
  const webinarIDJSON = await webinarID.json();
  const webID = webinarIDJSON.data[0].id;

  // haal alle data van het webinar op
  const webinarResponse = await fetch(`https://fdnd-agency.directus.app/items/avl_webinars?filter[slug][_eq]=${slug}&fields=title,id,views,date,video,duration,resources.*.*,slug,thumbnail,transcript,description,categories.*.*,speakers.*.*`);
  const webinarResponseJSON = await webinarResponse.json();

  // haal alle data van de comments op
  const webinarComments = await fetch("https://fdnd-agency.directus.app/items/avl_comments?filter[webinar_id][_eq]=" + webID +"&sort`=-id")
  const webinarCommentsJSON = await webinarComments.json();

  response.render("webinar-detail.liquid", {
    webinar: webinarResponseJSON.data[0],
    comments: webinarCommentsJSON.data,
  });
});


app.get('/404', async function (request, response) {
  response.render('partials/404.liquid')
})


/*
// Zie https://expressjs.com/en/5x/api.html#app.get.method over app.get()
app.get(…, async function (request, response) {
  
  // Zie https://expressjs.com/en/5x/api.html#res.render over response.render()
  response.render(…)
})
*/


app.post("/webinars/:slug/:id", async function (request, response) {

  const results = await fetch('https://fdnd-agency.directus.app/items/avl_comments', {
    method: 'POST',
    body: JSON.stringify({
      webinar_id: request.params.id,
      content: request.body.comment
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });

  console.log(results);
  response.redirect(303, `/webinars/${request.params.slug}`)


})



/*
// Zie https://expressjs.com/en/5x/api.html#app.post.method over app.post()
app.post(…, async function (request, response) {

  // In request.body zitten alle formuliervelden die een `name` attribuut hebben in je HTML
  console.log(request.body)

  // Via een fetch() naar Directus vullen we nieuwe gegevens in

  // Zie https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch over fetch()
  // Zie https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify over JSON.stringify()
  // Zie https://docs.directus.io/reference/items.html#create-an-item over het toevoegen van gegevens in Directus
  // Zie https://docs.directus.io/reference/items.html#update-an-item over het veranderen van gegevens in Directus
  await fetch(…, {
    method: …,
    body: JSON.stringify(…),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });

  // Redirect de gebruiker daarna naar een logische volgende stap
  // Zie https://expressjs.com/en/5x/api.html#res.redirect over response.redirect()
  response.redirect(303, …)
})
*/







// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console
  console.log(`Daarna kun je via http://localhost:${app.get('port')}/ jouw interactieve website bekijken.\n\nThe Web is for Everyone. Maak mooie dingen 🙂`)
})
