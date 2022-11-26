const superHero = require("superheroes");

console.log(superHero.all);

for(let i = 0; i < 5; i++)
{
    console.log(superHero.random());
}
