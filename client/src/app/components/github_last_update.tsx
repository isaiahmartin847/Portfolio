"use client"

// import Loadable from "next/dist/shared/lib/loadable.shared-runtime";
import { useEffect, useState } from "react"
import Loading from "./loading";


type Props = {
  repo: string 
  delay?: number 
}

const GithubLastUpdate = ({repo, delay}: Props) => {
    const [date, setDate]: any = useState(null)

    const keyOne = 'github_pat_'  
    const keyTwo = '11APCI5MQ0gpLgb1l9RaaX_sdIh7b4OUWrNYUAsI8Q25Jfkm5LkPv3s7HfoOz6J8rzHHALXTI4E6hC4ID9'


    useEffect(() => {
        const owner: string = 'isaiahmartin847';
        const token: string = 'asdasdfsadlkfjo9sadfeg';
        const apiUrl: string = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`;

        setTimeout(() => {
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
          }, delay)

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