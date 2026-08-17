# QR Code Generator

A pixel-accurate React QR Code Generator built with Vite. Create custom QR codes for websites, text, phone numbers, SMS, emails, locations, WiFi networks, and WhatsApp messages with full customization options.

![QR Code Generator](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.8-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **8 QR Code Types**: Website, Text, Phone, SMS, Email, Location, WiFi, WhatsApp
- **Real-time QR Generation**: Uses qrcode.react for instant QR code creation
- **Full Customization**: 
  - Custom QR color and background color
  - Adjustable QR size (128px - 512px)
  - Configurable margin (0 - 10)
  - Error correction levels (L, M, Q, H)
- **Export Options**: Download QR codes as PNG files
- **Clipboard Support**: Copy QR codes directly to clipboard
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Form Validation**: Comprehensive validation for all input types
- **Modern UI**: Clean, pixel-accurate design matching reference specifications
- **No Backend Required**: All processing happens in the browser

## Installation

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Setup

```bash
# Clone or navigate to the project directory
cd "c:\Users\Dell\Desktop\QR code generator"

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

### Generating a QR Code

1. **Select QR Code Type**: Choose from Website, Text, Phone, SMS, Email, Location, WiFi, or WhatsApp
2. **Enter Your Content**: Fill in the required fields based on your selected type
3. **Customize (Optional)**: Expand the style settings to adjust colors, size, margin, and error correction
4. **Generate QR Code**: Click the generate button to create your QR code
5. **Download or Copy**: Use the download or copy buttons to save your QR code

### QR Type Examples

**Website QR**
- Input: `https://example.com` or `example.com`
- Output: Scannable URL QR code

**Phone QR**
- Input: `+1 234 567 8900`
- Output: `tel:+12345678900` QR code

**SMS QR**
- Input: Phone `+1 234 567 8900`, Message `Hello`
- Output: `SMSTO:+12345678900:Hello` QR code

**Email QR**
- Input: Email `user@example.com`, Subject `Hello`, Message `Test`
- Output: `mailto:user@example.com?subject=Hello&body=Test` QR code

**Location QR**
- Input: Latitude `40.7128`, Longitude `-74.0060`
- Output: `geo:40.7128,-74.0060` QR code

**WiFi QR**
- Input: Network Name `MyWiFi`, Password `secret123`, Security `WPA`
- Output: `WIFI:T:WPA;S:MyWiFi;P:secret123;;` QR code

**WhatsApp QR**
- Input: Phone `+1 234 567 8900`, Message `Hello`
- Output: `https://wa.me/1234567890?text=Hello` QR code

## Customization Options

### QR Color
Choose any color for your QR code using the color picker. Default: `#1e293b` (dark navy)

### Background Color
Set the background color of your QR code. Default: `#ffffff` (white)

### QR Size
Adjust the size of the generated QR code from 128px to 512px in 32px increments.

### Margin
Control the white space around the QR code (0-10 pixels). Higher margins improve scannability.

### Error Correction
Choose the level of error correction:
- **L - Low**: 7% error correction
- **M - Medium**: 15% error correction (default)
- **Q - Quartile**: 25% error correction
- **H - High**: 30% error correction

Higher error correction allows the QR code to be read even if partially damaged.

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Navigation header with logo and menu
│   ├── QRTypeSelector.jsx      # QR type selection buttons
│   ├── QRContentForm.jsx       # Dynamic form for each QR type
│   ├── ScanTracking.jsx        # Scan tracking toggle component
│   ├── StyleSettings.jsx       # Customization accordion panel
│   ├── QRPreview.jsx           # QR code display with placeholder
│   └── ActionButtons.jsx        # Generate, customize, download buttons
├── utils/
│   ├── qrData.js               # QR data format conversion utilities
│   └── validation.js           # Form validation functions
├── App.jsx                     # Main application component
├── App.css                     # Application-specific styles
├── main.jsx                    # React entry point
└── index.css                   # Global styles
```

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

**Note**: Clipboard API requires HTTPS or localhost for security reasons.

## Dependencies

- **react**: ^18.2.0 - UI library
- **react-dom**: ^18.2.0 - React DOM renderer
- **qrcode.react**: ^3.1.0 - QR code generation library
- **bootstrap**: ^5.3.2 - UI framework (optional, for utility classes)
- **vite**: ^5.0.8 - Build tool and dev server
- **@vitejs/plugin-react**: ^4.2.1 - Vite React plugin

## Troubleshooting

### QR code not generating
- Ensure all required fields are filled
- Check for validation error messages below the input
- Verify the URL format (add https:// if needed)

### Download not working
- Check browser permissions for downloads
- Ensure the QR code has been generated first
- Try a different browser if issues persist

### Copy to clipboard not working
- Requires HTTPS or localhost
- Check browser clipboard permissions
- Some browsers may block clipboard access

### Build errors
- Delete `node_modules` and run `npm install` again
- Ensure Node.js version is 16 or higher
- Clear Vite cache: `rm -rf .vite` (Unix) or delete `.vite` folder (Windows)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
