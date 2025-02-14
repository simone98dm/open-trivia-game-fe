# Open Trivia Game

This project is a simple trivia game built with Nuxt 3, Pinia, and Vue.js. It fetches trivia questions from an API and allows users to answer them.

## Features

- Fetches trivia questions from an API.
- Presents questions with multiple-choice answers.
- Keeps track of the user's score.
- Provides a clean and user-friendly interface.

## Technologies Used

- [Nuxt 3](https://nuxt.com/): A progressive Vue.js framework.
- [Pinia](https://pinia.vuejs.org/): A Vue.js state management library.
- [Vue.js](https://vuejs.org/): A JavaScript framework for building user interfaces.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

## Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd open-trivia-game-fe
    ```

3.  Install the dependencies:

    ```bash
    yarn install
    # or
    npm install
    ```

## Development

1.  Start the development server:

    ```bash
    yarn dev
    # or
    npm run dev
    ```

This will start the Nuxt development server, and you can access the application in your browser at `http://localhost:3000`.

## State Management

The application uses [Pinia](https://pinia.vuejs.org/) for state management. The main store is located in [trivia.ts](./store/trivia.ts), which manages the trivia questions, current question index, and user score.

## Components

Key components include:

- [Answer.vue](./components/Answer.vue): Displays a single answer option.
- [Button.vue](./components/Button.vue): A reusable button component.
- [Skeleton.vue](./components/Skeleton.vue): A skeleton loader component for indicating loading states.

## API

The application fetches trivia questions from an external API called [Opentdb](https://opentdb.com). The specific API endpoint and configuration can be found in the relevant files (e.g., within the store or a utility function).

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for any bugs or feature requests.
