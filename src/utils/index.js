
/**
     * convert miliseconds to min and sec
     * @param {float} ms 
     * @return string
     */
export const toSeconds = (ms) => {
  ms = (ms - (ms % 1000)) / 1000;
  const sec = ms % 60;
  ms = (ms - sec) / 60;
  const min = ms % 60;

  return `${min} min ${sec} seg`

}

/**
 * concatenate all artist of a song
 * @param {Array} artists artists to concat
 */
export const concatArtists = (artists = []) => {
  var label = ''
  //map all artists
  artists.map(artist =>
    //
    label += artist.name + ', '
  )

  return label.slice(0, -2)
}

/**
 * calculates a song's rating to be 5-star compatible
 * 
 * @param {number} rating rating to convert
 */
export const calculateRating = (rating) => {
  return (rating / 10) * 0.5
}