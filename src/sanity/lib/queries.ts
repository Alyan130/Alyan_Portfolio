import { defineQuery } from "next-sanity"


export const projectsQuery =  defineQuery(
    `*[_type=="project"]{
    _id,
    Title,
    Description,
    "image": image.asset->url,                                                     
    giturl,
    deploy
  }`
)
