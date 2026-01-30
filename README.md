# Photography & Videography Portfolio

## Project Objective
A personal portfolio website showcasing photography and videography work to clients

## Home Page 
<img width="1468" height="911" alt="thumbnail" src="https://github.com/user-attachments/assets/b24b6e9d-42ab-45f6-b9df-bd68a89d8eb5" />

## Live Demo
https://itzghozt.github.io/Project-1Web-dev/index.html

## Demo Video
https://drive.google.com/file/d/158eH8Y5c8VIoZbTz66dHN8VSRJuJbhZj/view?usp=sharing

## Design Document 
https://drive.google.com/file/d/1M_eJaO-rY8TfM_-0egM24SH5ClCDKyTL/view?usp=sharing

## Build Instructions

### Installation
1. Clone the repository
2. Run `npm install`
3. Run `npx reload -b`
4. Open browser to `http://localhost:8080`

### Development
- Format code: `npx prettier --write .`
- Check code: `npx eslint .`

## Project Structure
```
project1/
├── index.html              # Homepage with video hero and about section
├── collections.html        # Photo gallery with masonry grid
├── film.html              # Film projects showcase (AI-generated page)
├── css/
│   ├── main.css           # Shared styles (navbar, base layout)
│   ├── collections.css    # Collections page specific styles
│   └── film.css           # Film page specific styles
├── js/
│   └── main.js            # All JavaScript functionality (ES6 module)
├── images/                # All photos, videos, logos, and media
├── docs/
│   └── DESIGN.md          # Design document (convert to PDF)
├── .gitignore            # Git ignore file
├── LICENSE               # MIT License
├── package.json          # Project dependencies
├── package-lock.json     # Dependency lock file
├── eslint.config.mjs     # ESLint configuration
└── README.md             # This file
```
## Technologies Used 
- HTML5 (semantic markup)
- CSS3 (Flexbox, CSS Grid, CSS Columns, Keyframe animations)
- JavaScript ES6+ (modules, Intersection Observer API, event listeners)
- Google Fonts (Salted font)

## Creative Addition 
Typing animation 
- A char by char typing effect on the home page
- Triggered by scroll
- Blinking cursor efefct
- Built with custom JavaScript
  
## Acknowledgments 
Acknowledgments
- Northeastern University CS 5610 course materials
- Google Fonts for Salted typeface
- W3C for validation tools
- Claude AI for development assistance

## Use of Generative AI 
**Claude by Anthropic**
- **Model:** Claude Sonnet 4.5

## Tool Used
**Claude by Anthropic** (Sonnet 4.5, claude.ai, January 2026)

### How It Was Used
Used Claude extensively as a learning tool and development assistant throughout the project.

**Example Prompts:**
1. "Help me create the ai film.html page - using this example layout please recreate it for the page"
2. "Show me how to implement a lightbox modal and give resources for image previews using vanilla JavaScript with no code"
3. "Can you give me some ideas on why my navigation bar is scrolling witht the page and not staying static"

AI-generated code was:
- Manually reviewed for correctness and best practices
- Tested across different browsers
- Validated with W3C validator
- Checked with ESLint and formatted with Prettier
- Modified to fit project requirements and personal aesthetic

## License
MIT License - see LICENSE file

## Author
Isabel Yeow  
Northeastern University

## Class Information
CS 5610 - Web Development  
Spring 2026
Class Link
https://johnguerra.co/classes/webDevelopment_online_fall_2025/index.html

## Peer Review Comments

The README is clear, well structured, and provides all the important information needed to understand the project. The documentation is strong, and the demo video is informative and gives a good overview of the application.

The repository contains both ai-page.html and film.html. It appears that ai-page.html may be an unused placeholder file. Removing it or clarifying its purpose would improve repository organization and reduce potential confusion.

The repository also includes an about.html file that does not appear to be part of the deployed website. If the file is no longer being used, removing it could help keep the repository clean and maintain a more streamlined project structure.

Index.html

The homepage is structured well with semantic HTML, clear class naming, and the required meta tags (author, description, favicon). The navigation links and images are configured properly, and the JavaScript is loaded using type="module", which satisfies the ES6 modules requirement.

film.html (AI Page)

The AI-generated film page is well organized and uses semantic sections for videos, audio, and images. Meta tags, CSS organization, and ES6 module loading are implemented correctly. The inclusion of lightbox markup suggests thoughtful integration with custom JavaScript functionality.

collections.html

The collections page is consistent with the rest of the site in terms of structure and styling. The masonry gallery layout uses clear class names, and all images include alt attributes. The lightbox markup is also present, supporting the interactive image experience.

CSS Files

The CSS is organized effectively with separate stylesheets for different pages and a consistent layout approach using flexbox, grid, and responsive media queries. The lightbox styling and gallery layouts are implemented clearly, and there is good use of classes without relying on !important.

JavaScript (main.js)

The JavaScript file demonstrates clear, original functionality beyond five lines and aligns well with the project features. It implements scroll-based page indicators with smooth navigation, dynamically updates navbar styling, includes a scroll-triggered typing animation using IntersectionObserver, and supports a reusable lightbox for images across multiple pages. The code is well structured with separate initialization functions and runs cleanly on DOMContentLoaded.

Project Organization

The repository is generally well organized with separate folders for CSS, JavaScript, and media files. As a small improvement, both the .mov video file and the audio file are currently stored inside the images folder. Creating dedicated directories for audio and video assets could further improve organization and make the project easier to maintain as it grows.

