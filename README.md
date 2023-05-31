# Portfolio

## Description

A new portfolio site built in React where I can showcase projects.

[The deployed link is here.](https://austinzumbro.github.io/portfolio)

Preview Image:

![Preview Image](/readme_images/preview-image.png)

A work in progress, certainly. But some fun stuff!

---

## ReactJS

This was my first foray into React, and I had a lot of fun tooling around. I have some prior experience using HandlebarsJS as a framework, so it was particularly exciting to explore the extra functionality.

For example, I played around with some form handling. Specifically, I wanted to add an alert if an email field was either empty or an invalid format.

```javascript
export default function Contact(props) {

  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of email
    if (inputType === "email") {
      setEmail(inputValue);
      if (inputValue === "") {
        setErrorMessage("Email is a required field.");
      } else if (!validateEmail(inputValue)) {
        setErrorMessage("Email is invalid.");
      } else {
        setErrorMessage(""); // Clear the error message if the input is valid
      }
    }
```

---

## TailwindCSS

This was my second time working with [TailwindCSS](https://tailwindcss.com/) (my first time working with it in React) and I continue to love it.

Based on a recommendation I saw on Reddit, I played around with including the [daisyUI](https://daisyui.com/) plugin, but by the end I wound up stripping most of that out.

---

## Background Texture

I really enjoy the idea of conveying a sense of natural texture through a screen, and while I don't think I really achieved that here, I did have fun experimenting with using an SVG filter to provide a paper texture in the background.

Inside the App.js file:

```javascript
// Establish the SVG
<svg
  className="background-svg"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  // Implement the filter
  <filter id="papertexture">
    // Create some visual noise
    <feTurbulence
      type="fractalNoise"
      baseFrequency="0.012"
      result="noise"
      numOctaves="5"
    />
    // Simulate some light
    <feDiffuseLighting in="noise" lightingColor="#fff" surfaceScale="2">
      // Set the height and direction of the light source
      <feDistantLight azimuth="270" elevation="60" />
    </feDiffuseLighting>
  </filter>
  <rect width="100%" height="100%" filter="url(#papertexture)" />
</svg>
```

Then just a little CSS to set the background.

```css
.app {
  position: relative;
}

.background-svg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
```

---

## Learnings / Reflections

As always, I am filled with admiration for graphic designers. I wish I was better at both envisioning and implementing pretty pictures and layouts.

React is neat. I'm interested to see what else is out there!
