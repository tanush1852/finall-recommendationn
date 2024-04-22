import Artist from "../components/artist";
import BottomGroup from "../components/bottom-group";
import TopGroup from "../components/top-group";
import recom from "../recom.js";
import styles from "./home-screen-dark.module.css";
import LinkClass from "./ComponentWithLink.js"
import createList from "./createList.js"
const HomeScreenDark = () => {

  return (

    <div className={styles.homeScreenDark}>

      <main className={styles.topGroupParent}>

        
        <TopGroup />
        <section className={styles.frameWrapper}>
          <div className={styles.tracksContainerParent}>
            <div className={styles.tracksContainer}>
              <div className={styles.frameParent}>

              

                <div className={styles.artistTitleParent}>
                  
                  <h2 className={styles.artistTitle}>
                    Your Musical Gallery: Discover Artists You'll Love
                  </h2>

                   <div className={styles.artist1Parent}>
  {/* Filter the first 4 artists and map them to render */}
                    {recom.slice(0, 4).map((artist, index) => (
                    <LinkClass key={index} className={styles.artistContainer} href={artist.ArtistUrl}>
                    <Artist
                       key={index}
                        artistImage={artist.ArtistImage}
                        artistName={artist.ArtistName}
                         index={index}
                       />
                  </LinkClass>
                   ))}
                    </div>

                </div>

                <div className={styles.tracksTitleParent}>
                  <h2 className={styles.tracksTitle}>
                    Tune In to Your Mood: Personalized Tracks Tailored to You
                  </h2>

                  <div className={styles.track1Parent}> {createList(recom.slice(1), 3)}</div>
                  <div className={styles.track1Parent}>{createList(recom.slice(4),3)}</div>
                  <div className={styles.track1Parent}>{createList(recom.slice(7),3)} </div>

                </div>

                
              </div>
            </div>
            <LinkClass class="home-screen-dark_rectangleLayer__ZO16W" href={recom[0].Link}>
            <div className={`${styles.clickVariants} ${styles.trackContainer}`}>
            
                  
                  
              <div className={styles.rectangleLayer} />
              <img
                className={styles.albumCoverIcon}
                loading="lazy"
                alt=""
                src={recom[0].Image}
              />
              <div className={styles.titleAndArtistWrapper}>
                <div className={styles.titleAndArtistContainer}>
                
                  <p
                    className={styles.dripTooHard}
                  >Top Recommended Music: {recom[0].Track}</p>
                  <p className={styles.title2}>Artist : {recom[0].ArtistName}</p>
                  
                
                </div>
              
              </div>
              <div className={styles.details}>
                <p className={styles.released12}>
                  Released Year : {recom[0].Year}
                </p>
                <p className={styles.genreTrap}>Album : {recom[0].Album}</p>
                
              </div>
              
             
            
              
              
            </div>
            </LinkClass>
          </div>
        </section>
      </main>
      <BottomGroup />
    </div>
);
};

export default HomeScreenDark; 


