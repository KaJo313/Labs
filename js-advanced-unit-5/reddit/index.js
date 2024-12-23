const redditUrl = "https://www.reddit.com/r/aww/.json"

const fetchRedditData = async () => {
  const response = await fetch(redditUrl)
  const data = await response.json()
  console.log(data)
}
fetchRedditData()

const getAwwPosts = async () => {
  const response = await fetch(redditUrl)
  const data = await response.json()
  return data.data.children.map(post => post.data)
}

const addTenPosts = async () => {
  const posts = await getAwwPosts()

  for (const post of posts.slice(1, 11)) {
    // First ten posts appearing after announcement at top of subreddit page //
    const postWrapper = document.createElement("div")
    const title = document.createElement("div")
    const photo = document.createElement("img")
    const url = document.createElement("a")
    title.innerText = post.title
    photo.src = post.thumbnail
    url.href = post.url
    url.innerText = "Click to see this post."
    //url.innerText = "https://www.reddit.com" + post.permalink
    postWrapper.appendChild(title)
    postWrapper.appendChild(photo)
    postWrapper.appendChild(url)
    postWrapper.classList.add("wrapper")
    document.body.appendChild(postWrapper)
  }
}

addTenPosts()
