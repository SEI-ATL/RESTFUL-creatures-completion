const fs = require('fs')

const dinoRouter = require('express').Router()

dinoRouter.get('/', (req, res) => {
  console.log('--- GET / ---');
  const rawDinos = fs.readFileSync('./dinosaurs.json')
  const dinos = JSON.parse(rawDinos)
  
  res.render('dinosaurs/index', { dinos })
})

// new has to be above show, or else it will think that 'new' is an id value
dinoRouter.get('/new', (req, res) => {
  res.render('dinosaurs/new')
})

dinoRouter.get('/:id', (req, res) => {
  const rawDinos = fs.readFileSync('./dinosaurs.json')
  const dinos = JSON.parse(rawDinos)
  const id = parseInt(req.params.id) - 1
  const dino = dinos[id]

  res.render('dinosaurs/show', { dino })
})

dinoRouter.post('/', (req, res) => {
  const newDino = req.body
  const rawDinos = fs.readFileSync('./dinosaurs.json')
  const dinos = JSON.parse(rawDinos)
  dinos.push(newDino)

  fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinos))

  res.redirect('/dinosaurs')
})

dinoRouter.get('/search/:searchTerm', (req, res) => {
  const newDino = req.body
  const rawDinos = fs.readFileSync('./dinosaurs.json')
  const dinos = JSON.parse(rawDinos)
  const searchTerm = req.params.searchTerm

  // note that the details of the search are up to you!
  // do partial matches count? do we look at the type property as well as the name property?
  // this is a crude, 1st draft kind of search
  const filteredDinos = dinos.filter((dino) => dino.name.toLowerCase() == searchTerm.toLowerCase())

  console.log(searchTerm);
  console.log(dinos);
  console.log(filteredDinos);

  res.render('dinosaurs/index', { dinos: filteredDinos })
})

// Edit route here
dinoRouter.get('/edit/:id', function(req, res) {
  console.log('--- EDIT route ---');
  const rawDinos = fs.readFileSync('./dinosaurs.json');
  const dinos = JSON.parse(rawDinos);
  res.render('dinosaurs/edit', { dino: dinos[req.params.id], dinoId: req.params.id})
})

dinoRouter.delete('/:id', function(req, res) {
  console.log('--- DELETE route ---')
  const rawDinos = fs.readFileSync('./dinosaurs.json');
  const dinos = JSON.parse(rawDinos);

  // Remove the deleted dino from the dinosaurs array
  dinos.splice(req.params.id, 1);
  // dinos = [0,1,2,4,5,6]

  // Save the new dinos to the dinosaurs.json file
  fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinos));

  // Redirect to the GET /dinosaurs route (index)
  res.redirect('/dinosaurs');
})

dinoRouter.put('/:id', function(req, res){
  console.log('--- PUT route ---');
  const rawDinos = fs.readFileSync('./dinosaurs.json');
  const dinos = JSON.parse(rawDinos);

  // Re-assign the name and type of the dinosaurs fields to be edited
  const dinoObject = dinos[req.params.id];
  dinoObject.name = req.body.name;
  dinoObject.type = req.body.type;

  fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinos));
  res.redirect('/dinosaurs');
})

module.exports = dinoRouter;
