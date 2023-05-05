'use client'

import { useState, useEffect} from "react"
import PromptCard from './PromptCard'

const Feed = () => {
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          input="text"
          placeholder="search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
        >
        </input>
      </form>
    </section>
  )
}

export default Feed