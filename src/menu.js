const content = document.getElementById("content");

// Heading and subheading
const headingDiv = document.createElement("div");
const heading = headingDiv.appendChild(document.createElement("h1"));
heading.textContent = "Beer List"
const subheading = headingDiv.appendChild(document.createElement("h3"));
subheading.textContent = "What's on tap at Hyvor's Brewery?"

// Beer List
const beerList = document.createElement("ul");
const autochPatternStout = beerList.appendChild(document.createElement("li"));
const autochPatternStoutTitle = autochPatternStout.appendChild(document.createElement("h5"))
autochPatternStoutTitle.textContent = "Autoch-pattern Stout";
const autochPatternStoutDescription = autochPatternStout.appendChild(document.createElement("p"))
autochPatternStoutDescription.textContent = "This stout it exactly the way Kin like it: heavy and reliable. With its rich, dark color and smooth, malty finish, it's the preferred drink if many Brokhyr and Hearthkyn.";

const etaCarnPlasmaAle = beerList.appendChild(document.createElement("li"));
const etaCarnPlasmaAleTitle = etaCarnPlasmaAle.appendChild(document.createElement("h5"));
etaCarnPlasmaAleTitle.textContent = "EtaCarn Plasma Ale";
const etaCarnPlasmaDescription = etaCarnPlasmaAle.appendChild(document.createElement("p"));
etaCarnPlasmaDescription.textContent = "Kin reach for an EPA when they want a problem obliterated. It's got a mean kick and a bright flavor profile, but that's how the Theyns like it."

const gravitonBlastPorter = beerList.appendChild(document.createElement("li"));
const gravitonBlastPorterTitle = gravitonBlastPorter.appendChild(document.createElement("h5"));
gravitonBlastPorterTitle.textContent = "Graviton Blast Porter";
const gravitonBlastPorterDescription = gravitonBlastPorter.appendChild(document.createElement("p"));
gravitonBlastPorterDescription.textContent = "Made as a collaboration with our Kin in the Forge, this porter can knock even a Cthonian to the floor, but it's deceptively smooth. ";

const volkaniteDisintegrator = beerList.appendChild(document.createElement("li"));
const volkaniteDisintegratorTitle = volkaniteDisintegrator.appendChild(document.createElement("h5"));
volkaniteDisintegratorTitle.textContent = "Volkanite Quadrupel";
const volkaniteDisintegratorDescription = volkaniteDisintegrator.appendChild(document.createElement("p"));
volkaniteDisintegratorDescription.textContent = "This beer defies description, and its production is a closely guarded secret. It's available in limited quantities after a Kinhosts recover the necessary ingredients, and that Kinhost's Kahl always gets the first glass.";

export default function () {
    content.appendChild(headingDiv);
    content.appendChild(beerList);
}
