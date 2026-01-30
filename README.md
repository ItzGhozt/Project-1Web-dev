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


## Peer review comment
The README is clear, well structured, and provides all the important information needed to understand the project. The documentation is good, and the demo video is informative and gives a good overview of the application.


