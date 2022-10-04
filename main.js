
import { hello } from './hello';
import "./style.css";
import html from './markdown.md';
document.getElementById("root").innerHTML = hello("xiaoou") + html;