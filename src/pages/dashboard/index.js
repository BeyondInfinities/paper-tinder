import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import Button from 'components/Button'
// import { actions } from 'slices/app.slice'
// import { images } from 'theme'
import styles from './dashboard.module.scss'

export default function Dashboard() {
  // const dispatch = useDispatch()
  // const { me } = useSelector((state) => state.app)
  return (
    <div className={styles.root}>
      <div className={styles.leftpane}>
        <form className={styles.search}>
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </form>

        <div className={styles.swiper}>
          <button
            type="button"
            className={styles.swipe}
            onClick={() => console.log('Right')}
          >
            Swipe Right
          </button>
          <button
            type="button"
            className={styles.swipe}
            onClick={() => console.log('Left')}
          >
            Swipe Left
          </button>
        </div>
      </div>

      <div className={styles.rightpane}>
        <div className={styles.card}>
          <div className={styles.cardImage}>Paper title</div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <h3>Abstract</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Dashboard.propTypes = {}
// Dashboard.defaultProps = {}
