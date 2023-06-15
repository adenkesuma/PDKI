"use client";
import { FC, useCallback, useRef, useEffect, useState, useLayoutEffect, FormEvent } from "react"
import Navigation from "../../components/navigation.tsx"
import { api } from "@/utils/api";

interface NewsProps {}

function updateTextAreaSize(textArea? : HTMLTextAreaElement){
  if (textArea == null) return
  textArea.style.height = "0";
  textArea.style.height = `${textArea.scrollHeight}px`;
}

const News: FC<NewsProps> = () => {
  const [news, setNews] = useState("")
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [image, setImage] = useState("Image")
  const [video, setVideo] = useState("Video")
  const [tags, setTags] = useState("Tags")
  const [category, setCategory] = useState("Category")
  const textAreaRef = useRef<HTMLTextAreaElement>();
  const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
    updateTextAreaSize(textArea);
    textAreaRef.current = textArea
  }, [])

  const utils = api.useContext()
  
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const get = utils.news.getAll.getInfiniteData()
    console.log(get);
    
    // createNews.  mutate({title, content:news, description: desc, image: image, video: video, tags:tags, category:category}) 
  }

  return (
    <>
      <Navigation />
      <h1>Testing News</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 border-b px-4 py-2">
        <div className="flex gap-4">
          <textarea 
            ref={inputRef}
            style={{ height: 0}}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
            placeholder="Masukkan Judul"
            name="title"
          />
        </div>
        <div className="flex gap-4">
          <textarea 
            ref={inputRef}
            style={{ height: 0}}
            onChange={(e) => setNews(e.target.value)}
            className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
            placeholder="Masukkan Berita"
            name="content"
          />
        </div>
        <div className="flex gap-4">
          <textarea 
            ref={inputRef}
            style={{ height: 0}}
            onChange={(e) => setDesc(e.target.value)}
            className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
            placeholder="Masukkan deskripsi"
            name="desc"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default News
