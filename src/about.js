const content = document.getElementById("content");

// Heading and subheading
const headingDiv = document.createElement("div");
const heading = headingDiv.appendChild(document.createElement("h1"));
heading.textContent = "About Hyvor's Brewery"
const subheading = headingDiv.appendChild(document.createElement("h3"));
subheading.textContent = "The Orion-Cygnus Arm's only Kin brewery."

// Text
const bodyParagraph1 = document.createElement("p");
bodyParagraph1.textContent = "When Hyvor left his Kinhost as a Hernkyn Yaegir, he never expected to open a brewery in this remote corner of the galaxy, but he and his Kin soon yearned for the brews of their Hold. Hyvor started looking for the right ingredients and equipment during Prospects until, one glorious day, he had everything necessary to craft an authentic Kin beer - just like his Ancestors made."

const bodyParagraph2 = document.createElement("p");
bodyParagraph2.textContent = "The beer was a resounding success, and he started trading the drink to other Kin and soon other species. When the beer started earning more than the Prospects, Hyvor's Brewery was born, and it soon became the mercantile center of the Orion-Cygnus arm with miners, merchants, and Kinhosts stopping by whenever they want a proper drink."

const bodyParagraph3 = document.createElement("p");
bodyParagraph3.textContent = "Which is often."


export default function () {
    content.appendChild(headingDiv);
    content.appendChild(bodyParagraph1);
    content.appendChild(bodyParagraph2);
    content.appendChild(bodyParagraph3);
}
