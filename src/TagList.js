import React from 'react'

const TagList = (props) => {
  return (
    <p>
      {props.storedTags.map((tag, index) =>
        <span key={`tag-${index}`}>
          <a
            name={tag}
            onClick={props.onTagClick}
            className={props.selectedTag === tag ? 'App-link-selected' : 'App-link'}
            href='www.volturnomorani.it'
          >
            {tag}
          </a>
          {index === props.storedTags.length - 1 ? '' : ' | '}
        </span>
      )}
    </p>
  ) }

export default TagList
