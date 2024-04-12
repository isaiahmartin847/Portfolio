"use client"

import { useEffect, useState } from "react"

export default function GithubLastUpdate () {
    const [date, setDate]: any = useState(null)

    useEffect(() => {
        const owner: string = 'isaiahmartin847';
        const token: string = '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';
        const repo: string = 'personal_web'
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

    return (
        <>
            <h1>this is the last update component last update {date}</h1>
        </>
    )
}