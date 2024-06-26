import HTMLCreator from "./components/HTMLCreator";

console.log('Hello, world!');

const heading = HTMLCreator.createElement('h1', { class: 'heading' }, ['Hello, World!']);
document.body.appendChild(heading);