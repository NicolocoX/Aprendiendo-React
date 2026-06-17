import { useState } from "react"

export function TwitterFollowCard({ children, usuario, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const botonTipo = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
  const botonTexto = isFollowing ? 'Siguiendo' : 'Seguir'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }


  return (
    <article className='tw-followCard'>
      <header className="tw-followCard-header">
        <img className='tw-followCard-avatar' src={`https://unavatar.io/x/${usuario}`} />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{usuario}</span>
        </div>
      </header>

      <aside>
        <button className={botonTipo} onClick={() => handleClick()}>
          <span className="tw-followCard-text">{botonTexto}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}