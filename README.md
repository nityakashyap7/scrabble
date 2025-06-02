# Scrabble!!

A casual real-time Scrabble web game built with React and Firebase. Made with love for The 'Vale Squad's online game nights 💙💙. Unlike the other online scrabble websites out there, ours is free, minimalist, supports gameplay with more than 2 people, and allows you to play YOUR friends instead of getting matched up with randos (yes, i am unabashedly throwing shade).

## Contributors 😎
- [Nitya Kashyap](https://github.com/nityakashyap7)

## 🚀 Setup Instructions (for devs joining the project)

1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-username/scrabble.git
   cd scrabble
   ```
2. **Install Dependencies**
    - Make sure you have Node.js installed. to check, run:
        ```bash
        node --version
        ```
        - if u get `zsh: command not found: node` then:
            - Go to [nodejs.org](https://nodejs.org/en), download the LTS version (recommended for most users), and run the installer.
                - This will install:
                    - node
                    - npm (Node Package Manager)
                    - npx (Node Package Runner)
    - *for project creator only*: run
        ```bash
        npm create vite@latest .
        ```
        making sure ur directory is empty **(beware: existing README will be overwritten)**
    - install all dependencies: 
        ```bash
        npm install
        ```
    - and start the dev server with: 
        ```bash
        npm run dev
        ```
        to develop and test locally. you'll see sth like `Local:   http://localhost:5173/`. Paste the url into ur browser to see changes as u code (refresh as needed)! 
