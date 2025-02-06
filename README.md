# IMDb Clone 

Site: https://imdb-clone-manmath.netlify.app

A responsive IMDb clone built using React.js and Tailwind CSS, featuring movie search, sorting, filtering, and pagination. The project integrates the TMDb API for dynamic content and is deployed on Netlify for seamless access.

## Features
- **Responsive UI**: Developed with React.js and styled using Tailwind CSS.
- **TMDb API Integration**: Fetches real-time movie data.
- **Search Functionality**: Users can search for movies dynamically.
- **Sorting & Filtering**: Sort movies by rating, release date, and popularity.
- **Pagination**: Efficiently handles large datasets.
- **Local Storage Support**: Saves user preferences and data locally.
- **Deployment**: Hosted on Netlify for easy accessibility.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **API**: TMDb API
- **Deployment**: Netlify

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js & npm/yarn

### Clone the Repository
```sh
git clone https://github.com/yourusername/imdb-clone.git
cd imdb-clone
```

### Install Dependencies
```sh
npm install  # or yarn install
```

### Configure API Key
1. Create an account on [TMDb](https://www.themoviedb.org/) and obtain an API key.
2. Create a `.env` file in the root directory and add:
   ```env
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

### Run the Project
```sh
npm start  # or yarn start
```

### Build for Production
```sh
npm run build  # or yarn build
```

## Deployment
The project is deployed on Netlify. To deploy your own version:
1. Push your code to a GitHub repository.
2. Connect the repo to [Netlify](https://www.netlify.com/) and deploy.


## Contributing
Feel free to submit issues or pull requests to improve the project.

## License
This project is open-source and available under the [MIT License](LICENSE).
