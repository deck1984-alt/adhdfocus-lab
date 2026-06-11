# ADHDFocus LAB

A frictionless Sudoku tool built with HTML and JavaScript.

## What this project does

ADHDFocus LAB is an open-source Sudoku project designed to keep the experience simple and low-friction.

It supports:
- Turning a Sudoku puzzle into a shareable URL.
- Building a QR code from that URL.
- Sharing the exact same puzzle across devices.
- Pasting an 81-digit puzzle string directly.
- Playing Sudoku in a browser interface.

## Why I built it

I wanted a Sudoku tool that works instantly in the browser, without forcing people to install an app or go through extra steps.

The goal is simple: paste, import, or upload a puzzle and start playing right away.

## Features

- QR code puzzle entry.
- Manual puzzle string input.
- Image-based puzzle digitization.
- Fast Pencil mode for quick note-taking.
- Mobile-friendly layout.
- Timer and error tracking.

## How to use

1. Open `index.html`.
2. Paste a puzzle string or a JSON array.
3. Use the image import page for puzzle digitization when needed.
4. Start the challenge.
5. You will be redirected to `soduko.html` to solve the puzzle in the browser.

## API key and advanced pages

This project includes optional API-powered flows for advanced users.

- `soduko-identify.html` handles puzzle digitization from images.
- `qr-generator.html` generates shareable links and QR codes from puzzle data.
- `index.html` currently routes to the image import page, while the QR generator page can be opened directly.

Users who enable these features may need to provide their own API key for local use.

## Support files

- `identify-prompt.js` stores the prompt used for the image import / OCR flow.
- `api-key.js` stores local or personal API settings for optional API-powered features.

## Important

I once exposed an API key in the repository, so this reminder is here to prevent that from happening again. 

Gemini told me to add `api-key.js` to `.gitignore`.

## About me

I'm a returning developer building practical open-source tools with simple, low-friction workflows.

I like keeping the user flow as short as possible because I don't like extra steps either.

## Support

If you find this project useful, you can support me through GitHub Sponsors.

## License

This project is open source. License details will be added here.