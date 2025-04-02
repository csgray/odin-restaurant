import spaceBar from "./assets/space_bar_by_kurobot.jpg"

const content = document.getElementById("content");

// Heading and subheading
const headingDiv = document.createElement("div");
const heading = headingDiv.appendChild(document.createElement("h1"));
heading.textContent = "Hyvor's Brewery"
const subheading = headingDiv.appendChild(document.createElement("h3"));
subheading.textContent = "The best beer outside the Galactic Core!"

// Image
const image = document.createElement("img");
image.src = spaceBar;
image.alt = "interior of a space bar"

// Text
const bodyParagraph = document.createElement("p");
bodyParagraph.textContent = "Welcome to our brewery! We're sure you'll enjoy our delicious food and drinks. Mostly drinks. At Hyvor's, we've been brewing beer for the past 1,000 years the same way that our Ancestors did. Whether you're wanting an Autoch-pattern Stout or an EtaCarn Plasma Ale, you'll find it at Hyvor's, so stop by the Orion-Cygnus Arm and make yourself at home. You'll feel like you never left your Hold."

const taglineParagraph = document.createElement("p");
taglineParagraph.id = "tagline";
const tagline = taglineParagraph.appendChild(document.createElement("em"));
tagline.textContent = "It's Kin.";

// Assembly
export default function () {
    content.appendChild(headingDiv);
    content.appendChild(image);
    content.appendChild(bodyParagraph);
    content.appendChild(taglineParagraph);
}