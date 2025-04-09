const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Function to create a placeholder image
function createPlaceholder(width, height, text, filename, gradientColors) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, gradientColors[0]);
  gradient.addColorStop(1, gradientColors[1]);
  
  // Fill background with gradient
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Add text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 40px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);
  
  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(publicDir, filename), buffer);
  console.log(`Created ${filename}`);
}

// Create placeholder images
const images = [
  {
    width: 1200,
    height: 800,
    text: 'HERO IMAGE',
    filename: 'hero-image.jpg',
    gradientColors: ['#1a1a1a', '#4a90e2']
  },
  {
    width: 800,
    height: 600,
    text: "WOMEN'S COLLECTION",
    filename: 'women.jpg',
    gradientColors: ['#ff6b6b', '#ff8e8e']
  },
  {
    width: 800,
    height: 600,
    text: "MEN'S COLLECTION",
    filename: 'men.jpg',
    gradientColors: ['#4a90e2', '#6aa9e8']
  },
  {
    width: 800,
    height: 600,
    text: 'ACCESSORIES',
    filename: 'accessories.jpg',
    gradientColors: ['#f5a623', '#f7c068']
  }
];

// Check if canvas is installed
try {
  images.forEach(img => createPlaceholder(img.width, img.height, img.text, img.filename, img.gradientColors));
  console.log('All placeholder images created successfully!');
} catch (error) {
  console.error('Error: The "canvas" package is not installed. Please install it first:');
  console.error('npm install canvas');
} 