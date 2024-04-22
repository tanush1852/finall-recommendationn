import json
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from utils import parameters, recommender
import re
import csv

# Set up connection to Spotify API
sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(client_id=parameters.SPOTIFY_CLIENT_ID, client_secret=parameters.SPOTIFY_CLIENT_SECRET))

def save_recommendations_to_json(recommendations_list, filename='./src/recom.js'):
    with open(filename, 'w') as json_file:
        json.dump(recommendations_list, json_file, indent=4)
    print(f'Recommendations saved to {filename}')

def save_recommendations_to_js(recommendations_list, filename='./src/recom.js'):
    with open(filename, 'w') as js_file:
        js_file.write('import React from "react";\n')
        js_file.write('const recom = [\n')
        for index, recommendation in enumerate(recommendations_list, start=1):
            js_file.write('  {\n')
            js_file.write(f'    "id": "{index}",\n')
            for key, value in recommendation.items():
                if key != "id":
                    js_file.write(f'    "{key}": "{value}",\n')
            js_file.write('  },\n')
        js_file.write('];\n\n')
        js_file.write('export default recom;')
    print(f'Recommendations saved to {filename}')

def get_track_details(track_id, recommendations, index):
    track = sp.track(track_id)
    artists = ', '.join([artist['name'] for artist in track['artists']])
    album = track['album']['name']
    year = track['album']['release_date'][:4]
    link = 'https://open.spotify.com/track/' + re.search('.+:(.+)', track['uri']).group(1)
    image_url = track['album']['images'][0]['url']  # Fetch the image URL from the first image in the album

    artist_id = track['artists'][0]['id']  # Assuming only one artist for simplicity
    artist = sp.artist(artist_id)
    artist_name = artist['name']
    artist_image_url = artist['images'][0]['url'] if artist['images'] else None
    artist_url = artist['external_urls']['spotify'] if 'spotify' in artist['external_urls'] else None
    return {
        'Track': track['name'],
        'Artist': artists,
        'Album': album,
        'Year': year,
        'Link': link,
        'Image': image_url,
        'ArtistName' : artist_name,
        'ArtistImage' : artist_image_url,
        'ArtistUrl' : artist_url
    }

def get_audio_features(id):
    features = sp.audio_features(id)[0]
    return {
        'Danceability': features['danceability'],
        'Energy': features['energy'],
        'Speechiness': features['speechiness'],
        'Acousticness': features['acousticness'],
        'Instrumentalness': features['instrumentalness'],
        'Liveness': features['liveness'],
        'Valence': features['valence'],
        'Tempo': features['tempo']
    }

def main():
    # Read track IDs from CSV file
    with open('track_info.csv', 'r') as csvfile:
        reader = csv.reader(csvfile)
        track_ids = [row[0] for row in reader]  # Extract only the first column (IDs)

    features_list = []

    # Get audio features for the input track
    for track_id in track_ids:
        features = get_audio_features(track_id)
        features_list.append(features)
    
    # Load the original track list DataFrame
    tracks_list_original = recommender.get_tracks_list_original()
    
    # Get recommendations
    recommendations = recommender.get_recommendation(features_list, num_recommendations=10)
    
    # Fetch track details including image URL from Spotify
    recommendations_list = []
    for index, track_id in enumerate(recommendations[0]):
        track_details = get_track_details(track_id, recommendations, index)  # Pass index to get_track_details
        recommendations_list.append(track_details)
    
    # Save recommendations to JSON
    #save_recommendations_to_json(recommendations_list)
    save_recommendations_to_js(recommendations_list)

if __name__ == "__main__":
    main()
