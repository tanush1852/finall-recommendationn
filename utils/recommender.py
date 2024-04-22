import pandas as pd
from scipy.spatial.distance import cdist
from sklearn.preprocessing import StandardScaler
import itertools
import ast

tracks_list_original = pd.read_csv('data/tracklist.csv')
tracks_list = tracks_list_original.copy()

def get_tracks_list_original():
    return tracks_list_original

def get_tracks_list():
    return tracks_list

def get_artists_genres():
    flat_list = []
    for genres in tracks_list_original.Genres.unique():
        sublist = ast.literal_eval(genres)
        for item in sublist:
            flat_list.append(item)
    genres = list(dict.fromkeys(flat_list))
    genres.sort()
    return genres

def create_similarity(song, dataframe):
    distance_vector = cdist(XA=song,XB=dataframe,metric='euclidean')
    similarities = 1 / (1 + distance_vector)    
    similarity_index = pd.DataFrame(similarities, columns=dataframe.index)
    return similarity_index

def get_recommendation(features_list,num_recommendations=1):
    tracks_list = tracks_list_original.copy()
    result_list = []
    match_list = []

    tracks_list = tracks_list.loc[(tracks_list.Year >= 0) & (tracks_list.Year <= 2020)]


    tracks_list.drop(['Name','Artist','Year','Album','Key','Mode','Loudness','Genres','Popularity','Img', 'Unnamed: 0'], axis='columns', inplace=True) #add genres
    tracks_list.set_index('Id', inplace=True)
    cols = tracks_list.columns.str.lower()
    indx = tracks_list.index
    scaler = StandardScaler()
    tracks_list = scaler.fit_transform(tracks_list)
    tracks_list = pd.DataFrame(tracks_list,index=indx,columns=cols)

    for features in features_list:
    # Create an empty DataFrame with consistent column names
     feature_names = ['Danceability', 'Energy', 'Speechiness', 'Acousticness', 'Instrumentalness', 'Liveness', 'Valence', 'Tempo']
     song = pd.DataFrame(columns=feature_names)

    # Iterate over the features and add them to the DataFrame
     for feature_name, feature_value in features.items():
        feature_name = feature_name.capitalize()
        if feature_name in feature_names:
            song[feature_name] = [feature_value]
        else:
            print(f"Warning: Unrecognized feature name '{feature_name}'")

    song = scaler.transform(song)
    results = create_similarity(song,tracks_list).T[0].sort_values(ascending=False).reset_index()
    result_list.extend(results.loc[results[0]<0.96, 'Id'].tolist()[:num_recommendations])
    match_list.extend(results.loc[results[0]<0.96, 0].tolist()[:num_recommendations])

    return [result_list, match_list]