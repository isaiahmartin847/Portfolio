"use client"

import Loadable from "next/dist/shared/lib/loadable.shared-runtime";
import { useEffect, useState } from "react"
import Loading from "./loading";


type Props = {
  repo: string 
}

const GithubLastUpdate = ({repo}: Props) => {
    const [date, setDate]: any = useState(null)


    useEffect(() => {
        const owner: string = 'isaiahmartin847';
        const token: string = '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';
        // const repo: string = 'personal_web'
        const apiUrl: string = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`;

        fetch(apiUrl, {
            headers: {
              'Authorization': `token ${token}`
            }
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            formateDate(data[0].commit.author.date)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });

    }, [])


    const formateDate = (time: string) => {
        const arr = time.split("T")
        const [year, month, day] = arr[0].split("-")
        setDate(() => {
            return `${month}/${day}/${year}`
        })
    }

    if(date) {
      return (
        <h1>The last commit to this repo was on {date}</h1>
      )
    } else {
      return (
        <div className="pt-2 pb-1 w-fit ml-[47%] ">
          <Loading />
        </div>
      )
    }

}



export default GithubLastUpdate