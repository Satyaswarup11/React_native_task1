# Swipe Cards React Native App

## Overview

This is a simple React Native app that allows users to swipe through a deck of cards. Each card has a distinct color, and users can swipe the cards to the right or left. When swiped right, a check mark icon appears, and when swiped left, a cross icon appears.


## Technologies Used

- React Nativev
- [React Native Deck Swiper](https://www.npmjs.com/package/react-native-deck-swiper)
- [Expo Vector Icons](https://www.npmjs.com/package/@expo/vector-icons)

## Instalation 

1. Clone the repository:

```bash
git clone https://github.com/yourusername/swipe-cards-app.git
```

2. Navigate to the project directory:

```bash
cd swipe-cards-app
```

3. Install dependencies:

```bash
npm install react-native-deck-swiper @expo/vector-icons
```

4. Run the app:

```bash
npm start
```

This will launch the Expo development server, and you can run the app on an emulator or a physical device using the Expo Go app.

## Usage

- Swipe cards right to indicate liking a card.
- Swipe cards left to indicate disliking a card.
- Check mark (green) and cross mark (red) icons will appear based on the direction of the swipe.
- The app supports infinite card swiping.

## Components

- Swiper: The main component responsible for rendering the deck of cards and handling swipe actions.

## Card Data

The cards array contains objects representing individual cards. Each card has an id and a color property.

## Styling 

The styling of the cards includes background color, shadow properties, and overlay labels for the like (right) and dislike (left) actions. The overlay labels also display check mark and cross icons.

