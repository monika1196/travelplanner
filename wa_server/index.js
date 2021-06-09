const express = require('express');
const app = express();
const cors = require("cors")
const bodyParser = require('body-parser');

// configuration middleware CORS
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: (origin, cb) => {
    const originIsWhitelisted = whitelist.includes(origin);
    cb(null, originIsWhitelisted);
    
  },
  credentials: true,
};
app.use(cors(corsOptions));


const PORT = 5001

const cities = [
  { id: '1', name: 'Madrid', image:'madrid.jpg', description: "Madrid, Spain's central capital, is a city of elegant boulevards and expansive, manicured parks such as the Buen Retiro. It’s renowned for its rich repositories of European art, including the Prado Museum’s works by Goya, Velázquez and other Spanish masters. The heart of old Hapsburg Madrid is the portico-lined Plaza Mayor, and nearby is the baroque Royal Palace and Armory, displaying historic weaponry.Spain is a great place for foodies. The quality and variety of the contemporary Spanish cuisine places it doubtlessly among the world’s best food scenes. In this sense, Madrid is no exception. One of most interesting experiences you can have here is eating at the world’s supposedly oldest still existing restaurant—there’s even a Guinness World Record certificate to prove it. The place is called Sobrino de Botín and was founded in 1725. " },
  { id: '2', name: 'Toronto',image:'toronto.jpg', description: "Toronto, the capital of the province of Ontario, is a major Canadian city along Lake Ontario’s northwestern shore. It's a dynamic metropolis with a core of soaring skyscrapers, all dwarfed by the iconic, free-standing CN Tower. Toronto also has many green spaces, from the orderly oval of Queen’s Park to 400-acre High Park and its trails, sports facilities and zoo.There are many cultural things to do in Toronto, it being a lively, cosmopolitan city, and one of the most popular destinations in Canada. It’s has a famous music scene, an extremely varied dining scene and many unique neighbourhoods, all clustered around the Old Town. Torontonians are also keen on their sports, with the city coming to life on game days – around the baseball ground in the summer and the ice hockey stadium in the winter." },

  { id: '3', name: 'Kolkata',image:'kolkata.jpg', description: "Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals. It’s also home to Mother House, headquarters of the Missionaries of Charity, founded by Mother Teresa, whose tomb is on site. The first in the country and over 30 years in service, the Kolkata Metro network covers most of the main areas and provides superb access around the city. Transporting over half a million commuters daily, this has become one of the fastest and most hassle free way to transverse West Bengals capital.Having such a culturally diverse past, Kolkata till today remains one of India’s most historic and cosmopolitan places." },

  { id: '4', name: 'Edmonton',image:'edmonton.jpg', description: "Edmonton is the capital city of the Canadian province of Alberta. Edmonton is on the North Saskatchewan River and is the centre of the Edmonton Metropolitan Region, which is surrounded by Alberta's central region. The city anchors the north end of what Statistics Canada defines as the Calgary–Edmonton Corridor. Edmonton is divided into 375 neighbourhoods within 7 geographic sectors—a mature area sector, which includes neighbourhoods that were essentially built out before 1970,and six surrounding suburban sectors.Edmonton's Downtown is within the city's mature area or inner city.It and the surrounding Boyle Street, Central McDougall, Cloverdale, Garneau, McCauley, Oliver, Queen Mary Park, Riverdale, Rossdale, Strathcona and University of Alberta form Edmonton's Central Core.Oliver and Garneau are the city's most populated neighbourhoods respectively." },

  { id: '5', name: 'Mumbai',image:'mumbai.jpg', description: "Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva. The city's also famous as the heart of the Bollywood film industry.The seven islands that constitute Mumbai were originally home to communities of Marathi language speaking Koli people.For centuries, the islands were under the control of successive indigenous empires before being ceded to the Portuguese Empire and subsequently to the East India Company when in 1661 Charles II of England married Catherine of Braganza and as part of her dowry Charles received the ports of Tangier and Seven Islands of Bombay." },

]

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const router = require('./router');
app.use("/forcasts/", router);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.json("hello")
});

app.get('/cities/:name', (req, res) => {
  console.log("params", req.params)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  const myCity = cities.find(city => city.name.toLowerCase() === req.params.name.toLowerCase())
  
  if (myCity) {
    return res.status(200).json(myCity)
  } else {
    return res.status(404).json({ message: 'no city found' })
  }
})

app.listen(PORT, '127.0.0.1', () => {

  console.log(`Server is listening on port ${PORT}...`);

});
