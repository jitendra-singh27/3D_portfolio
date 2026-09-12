# Jitendra Singh - 3D Portfolio

An interactive developer portfolio built with React, Vite, Tailwind CSS, and Three.js. The site presents Jitendra Singh's experience, technology stack, selected projects, testimonials, and a contact form inside a responsive 3D interface.

## Features

- Interactive 3D desktop computer, Earth, technology, and star-field scenes
- Responsive layout for desktop, tablet, and mobile screens
- Animated section transitions powered by Framer Motion
- Experience timeline and technology showcase
- Project cards with repository and live project links
- Contact form powered by EmailJS

## Tech Stack

- React 18 and React Router
- Vite
- Tailwind CSS
- Three.js with React Three Fiber and Drei
- Framer Motion
- EmailJS

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Configure the contact form

Create a `.env` file in the project root and add your EmailJS credentials:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

The EmailJS template should accept the fields `from_name`, `from_email`, `to_name`, `to_email`, and `message`.

### Run locally

```bash
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Project Structure

```text
public/                  3D models and textures
src/components/          Portfolio sections and canvas components
src/constants/           Navigation, experience, tech, and project data
src/assets/              Images and company/technology assets
src/hoc/                 Reusable section wrappers
src/utils/               Animation helpers
src/App.jsx              Main page composition
src/index.css            Global styles and Tailwind layers
```

## Customization

Most portfolio content is defined in `src/constants/index.js`. Update the navigation, services, technologies, experience entries, testimonials, and projects there. The main page section order is defined in `src/App.jsx`.

To replace the 3D scenes, update the models and textures under `public/` and the corresponding canvas components under `src/components/canvas/`.

## Build for Production

```bash
npm run build
npm run preview
```

The generated static files are written to `dist/` and can be deployed to any hosting provider that supports single-page applications. Configure the host to fall back to `index.html` for client-side routes.

## License

The project-specific source code is available for personal and portfolio use. Check the `license.txt` files in `public/desktop_pc/` and `public/planet/` for the licenses of the bundled 3D assets.
