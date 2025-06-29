# 🚀 COSC Commit Counter

A fun and interactive commit counter simulation for the CBIT Open Source Community (COSC) during HackWeek. This project mimics the behavior of a real-time commit tracker with a beautiful, responsive UI built using vanilla HTML, CSS, and JavaScript.

## ✨ Features

- **Interactive Counter**: Start from 0 and track simulated commits
- **Three Control Buttons**:
  - ✅ **Increment**: Simulate a new commit (+1)
  - 🔄 **Decrement**: Simulate a reverted commit (-1, won't go below 0)
  - 🕛 **Reset**: Manually reset counter to 0
- **Live Digital Clock**: Real-time clock display
- **Automatic Midnight Reset**: Counter automatically resets at midnight
- **Smooth Animations**: Beautiful transitions and hover effects
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Pure Client-Side**: No backend or API dependencies

## 🛠️ Tech Stack

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **Vanilla JavaScript**: Pure client-side logic with no frameworks

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/cosc-commit-counter.git
   cd cosc-commit-counter
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

## 🎮 Usage

1. **Increment Commits**: Click the "✅ Increment" button to simulate a new commit
2. **Decrement Commits**: Click the "🔄 Decrement" button to simulate a reverted commit
3. **Manual Reset**: Click the "🕛 Reset" button to reset the counter to 0
4. **Automatic Reset**: The counter automatically resets to 0 at midnight

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Or connect your GitHub repository for automatic deployments

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

## 📁 Project Structure

```
cosc-commit-counter/
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # JavaScript logic
└── README.md           # This file
```

## 🎨 Design Features

- **Modern UI**: Clean, card-based design with subtle shadows
- **Gradient Background**: Beautiful blue gradient background
- **Smooth Transitions**: CSS transitions for all interactive elements
- **Hover Effects**: Buttons scale and change color on hover
- **Counter Animation**: Counter scales and changes color when updated
- **Responsive**: Adapts to different screen sizes

## 🔧 Customization

### Colors
Modify the color scheme in `style.css`:
```css
/* Primary colors */
--primary-color: #1e3c72;
--secondary-color: #2a5298;
```

### Animation Duration
Adjust animation timing in `style.css`:
```css
.counter {
    transition: transform 0.2s cubic-bezier(.68,-0.55,.27,1.55);
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built for CBIT Open Source Community (COSC) HackWeek
- Inspired by real commit tracking systems
- Designed with modern web development best practices

---

**Happy Coding! 🎉** 