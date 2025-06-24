import React from 'react';
import images from '../assets/images';

const MovieInfo = ({ movieData }) => {
  return (
    <div id="MovieInfo_1" className="space-y-4">
      <h1 id="MovieInfo_2" className="text-3xl font-bold text-gray-900">
        {movieData?.title || 'Inception'}
      </h1>
      <div id="MovieInfo_3" className="flex items-center space-x-4 text-sm text-gray-500">
        <span id="MovieInfo_4">{movieData?.runtime || '148 minutes'}</span>
        <span id="MovieInfo_5">•</span>
        <span id="MovieInfo_6">{movieData?.rating || 'PG-13'}</span>
        <span id="MovieInfo_7">•</span>
        <span id="MovieInfo_8">{movieData?.genre || 'Sci-Fi, Action'}</span>
      </div>
      <div id="MovieInfo_9" className="space-y-2">
        <h2 id="MovieInfo_10" className="text-xl font-semibold text-gray-900">Synopsis</h2>
        <p id="MovieInfo_11" className="text-gray-600">
          {movieData?.synopsis || 'A skilled thief with the rare ability to enter people\'s dreams takes on an impossible task: inception.'}
        </p>
      </div>
      <div id="MovieInfo_12" className="space-y-2">
        <h2 id="MovieInfo_13" className="text-xl font-semibold text-gray-900">Cast</h2>
        <p id="MovieInfo_14" className="text-gray-600">
          {movieData?.cast || 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page'}
        </p>
      </div>
      <div id="MovieInfo_15" className="space-y-2">
        <h2 id="MovieInfo_16" className="text-xl font-semibold text-gray-900">Director</h2>
        <p id="MovieInfo_17" className="text-gray-600">
          {movieData?.director || 'Christopher Nolan'}
        </p>
      </div>
    </div>
  );
};

export default MovieInfo;