import React from 'react'

const NameCard = (props) => {
  const { name, number, isHuman, tags } = props;
  return (
    <div className="alert alert-success">
      <h4 className="alert-heading">{name}</h4>
      <ul>
        <li>电话： {number}</li>
        <li>{isHuman?'人类':'外星生物'}</li>
        <hr/>
        <p>
          {tags && tags.map((t, i) => (
            <span key={i} className="badge badge-pill badge-primary">{t}&nbsp;</span>
          ))}
        </p>
      </ul>
    </div>
  )
}

export default NameCard